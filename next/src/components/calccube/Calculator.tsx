"use client";
import { Screen } from "@/components/calccube";
import { useState } from "react";
import type { PointerEvent } from "react";
import { useRef, useCallback, useEffect, useMemo } from "react";
import { Behaviour } from "@/util";
import { Color, MeshBasicMaterial, Mesh } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { bakedsym } from "../../assets/calcube";
import gsap from "gsap"
import type { CalcType, GLTFType, NodeKeyMapType, RetrieveCameraType, SetCalcType } from 'demdevvyshared/calccube';
import { useThree } from "@react-three/fiber";

const Calculator = ({ retrieveCamera }: { retrieveCamera: RetrieveCameraType }) => {
    const { camera } = useThree();
    const [calc, setCalc] = useState<CalcType>({
        operator: '',
        prevOperand: '',
        currentOperand: '',
        power: true
    });
    const calcRef = useRef<null | { calc: CalcType, setCalc: SetCalcType }>(null);
    const behaviour = useMemo(() => new Behaviour(), []);
    const { nodes, scene } = useGLTF('/calc/calculator.glb') as unknown as GLTFType;
    const map = useTexture(bakedsym.src);
    const audio = useRef(new Audio('/audio/keypress.mp3'));
    map.flipY = false
    audio.current.volume = 0.25

    const nodeKeyMap: NodeKeyMapType = useMemo(() => ({
        '0': nodes['0'], '1': nodes['1'], '2': nodes['2'],
        '3': nodes['3'], '4': nodes['4'], '5': nodes['5'],
        '6': nodes['6'], '7': nodes['7'], '8': nodes['8'],
        '9': nodes['9'], '.': nodes['Decimal'], '=': nodes['Equals'],
        'Enter': nodes['Equals'], '+': nodes['Plus'], '-': nodes['Minus'],
        '*': nodes['Multiply'], 'x': nodes['Multiply'], '/': nodes['Divide'],
        'Escape': nodes['AC'], ',': nodes['PlusOrMinus'], '%': nodes['Percent'],
        '`': nodes['IO'], 'Backspace': nodes['Del'], 'r': nodes['Rand'],
        'p': nodes['Pi']
    }) as NodeKeyMapType, [nodes]);


    const click = useCallback((e: PointerEvent & { object: Mesh }) => {
        e.stopPropagation()
        const node = e.object
        if (node.name === 'Case' || node.name === 'Display') return
        animate(node)
        behaviour.runOperation(node, calc, setCalc)
    }, [calc, behaviour])

    calcRef.current = { calc, setCalc };
    const press = useCallback(({ key }: { key: string }) => {
        if (calcRef.current === null) return;
        const node = nodeKeyMap[key]
        if (!node) return
        animate(node)
        behaviour.runOperation(node, calcRef.current.calc, calcRef.current.setCalc)
    }, [behaviour]);

    useEffect(() => {
        retrieveCamera(camera);
        const color = new Color(0.53, 0.53, 0.53)
        const mat = new MeshBasicMaterial({ map, color })
        scene.traverse(node => {
            if (node instanceof Mesh && node.isMesh) node.material = mat
        })
        window.addEventListener('keydown', press)
        return () => {
            window.removeEventListener('keydown', press)
        }
    }, [camera, map, press, retrieveCamera, scene])
    const animate = (node: Mesh) => {
        audio.current.currentTime = 0
        audio.current.play()
        const tl = gsap.timeline()
        tl
            .to(node.position, { duration: 0.1, y: -0.35, ease: 'power3.inOut' })
            .to(node.position, { duration: 0.125, y: 0, ease: 'power3.inOut' })
    }
    return (
        <>
            <Screen calc={calc} />
            <primitive object={scene} rotation={[0, Math.PI, 0]} position={[0, 0, 0]} onPointerDown={click} />
        </>
    )
}

export default Calculator;