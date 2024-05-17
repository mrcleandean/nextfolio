"use client";
import { Mesh } from 'three';
import { useEffect, useState } from "react"
import { useThree } from "@react-three/fiber"
import { Float, useGLTF, Environment, Text, View, PerspectiveCamera } from "@react-three/drei"

const Raygun = () => {
    const { scene } = useGLTF('/raygun/compressed_raygun.glb');
    const { size } = useThree();
    const [scale, setScale] = useState(1);
    const baseWidth = 1280;

    useEffect(() => {
        const scaleFactor = size.width / baseWidth;
        setScale(scaleFactor);
    }, [size.width]);

    useEffect(() => {
        scene.traverse(obj => {
            if (obj instanceof Mesh) {
                obj.material.envMapIntensity = 8
            }
        })
    }, []);

    return (
        <Float rotationIntensity={2} speed={4}>
            <primitive
                object={scene}
                scale={scale * 1.5465}
                rotation={[0, -Math.PI * 0.7, 0]}
                position-y={1}
                position-x={-0.5}
            />
            <Text
                font="./bangersfont.woff"
                fontSize={0.5}
                position={[0, -2 * scale * 1.5, 2 * scale * 1.5]}
                color={'#FE6666'}
                rotation-z={Math.PI * 0.21}
                rotation-x={Math.PI * 0.05}
                maxWidth={2}
                scale={scale * 1.5}
            >
                Because it&apos;s cool.
            </Text>
        </Float>
    )
}

const RaygunCanvas = () => {
    return (
        <>
            <View className='w-full h-full'>
                <PerspectiveCamera
                    makeDefault
                    fov={45}
                    near={0.1}
                    far={1000}
                    position={[0, 0, 10]}
                    rotation={[0, 0, Math.PI * 0.2]}
                />
                <Environment files="freebie1.hdr" />
                <Raygun />
            </View>
        </>
    )
}

export default RaygunCanvas