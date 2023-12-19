"use client";
import { MeshStandardMaterial } from "three";
import { Canvas, PrimitiveProps, useFrame, useLoader, useThree } from "@react-three/fiber"
import { Environment, Preload } from "@react-three/drei"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { useRef, useState, useEffect } from "react"
import { LocalLoader } from '@/components/shared'
import { CanvasPropTypes } from "@/shared/types/portfolio";

const Buddha = () => {
    const headRef = useRef<PrimitiveProps | null>(null);
    const headModel = useLoader(OBJLoader, '/models/buddha/buddha.mtl');
    const { size } = useThree();
    const [scale, setScale] = useState(1);
    const baseWidth = 1280;

    useEffect(() => {
        const scaleFactor = size.width / baseWidth;
        setScale(scaleFactor);
    }, [size.width]);

    useFrame((state) => {
        if (headRef.current === null) return;
        headRef.current.rotation.y = state.clock.elapsedTime * 0.5
    });

    return (
        <primitive
            ref={headRef}
            object={headModel}
            scale={scale * 21}
            position={[0, -0.24 * scale, 0]}
            children-0-material={new MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0,
                metalness: 1,
                envMapIntensity: 0.8
            })}
        />
    )
}

const BuddhaCanvas = ({ id, setLoadingState }: CanvasPropTypes) => {
    return (
        <>
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    preserveDrawingBuffer: true
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 10],
                }}
            >
                <Environment files="environment.hdr" />
                <pointLight args={['#85ccb8', 7.5, 20]} position={[0, 3, 2]} />
                <pointLight args={['#9f85cc', 7.5, 20]} position={[0, 3, 2]} />
                <Buddha />
                <Preload all />
            </Canvas>
            <LocalLoader id={id} setLoadingState={setLoadingState} />
        </>
    )
}

export default BuddhaCanvas