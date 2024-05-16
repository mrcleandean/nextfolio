"use client";
import { MeshStandardMaterial } from "three";
import { PrimitiveProps, useFrame, useThree } from "@react-three/fiber"
import { Environment, PerspectiveCamera, View, useGLTF } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"

const Buddha = () => {
    const headRef = useRef<PrimitiveProps | null>(null);
    const { scene } = useGLTF('/buddha/compressed_buddha.glb');
    const { size } = useThree();
    const [scale, setScale] = useState(1);

    useEffect(() => {
        let baseWidth;
        if (window.innerWidth < 950) {
            baseWidth = 900;
        } else {
            baseWidth = 1280;
        }
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
            object={scene}
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

const BuddhaCanvas = () => {
    return (
        <View className="w-full h-full">
            <PerspectiveCamera
                makeDefault
                fov={45}
                near={0.1}
                far={1000}
                position={[0, 0, 10]}
            />
            <Environment files="freebie1.hdr" />
            <pointLight args={['#85ccb8', 7.5, 20]} position={[0, 3, 2]} />
            <pointLight args={['#9f85cc', 7.5, 20]} position={[0, 3, 2]} />
            <Buddha />
        </View>
    )
}

export default BuddhaCanvas