"use client";
import { View, useGLTF } from "@react-three/drei"
import { type FC, Suspense, useEffect, useRef } from "react"
import type { ProjectModelType } from "./templates/projects"
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { Color, Mesh } from "three";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const ProjectModel: FC<ProjectModelType & { isVisible: boolean }> = (props) => {
    return (
        <View className="w-full h-full">
            <Primitive
                {...props}
            />
        </View>
    )
}

const Primitive: FC<ProjectModelType & { isVisible: boolean }> = ({ src, position, rotation, scale, color, axis, invert, isVisible }) => {
    const ref = useRef<PrimitiveProps | null>(null);
    const { scene } = useGLTF(src);
    useFrame((state) => {
        if (ref.current === null) return;
        ref.current.rotation[axis ?? 'y'] = state.clock.elapsedTime * 0.6 * (invert ? -1 : 1)
    });
    useEffect(() => {
        if (!color) return;
        const fill = new Color(color)
        scene.traverse((obj) => {
            if (obj instanceof Mesh && obj.isMesh) obj.material.color = fill
        })
    }, [scene]);

    useGSAP(() => {
        if (isVisible) {
            gsap.to(ref.current?.scale, {
                x: scale,
                y: scale,
                z: scale,
                duration: 0.25
            });
        }
    }, [isVisible]);

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <primitive
                    ref={ref}
                    object={scene}
                    position={position}
                    rotation={rotation}
                    scale={0}
                />
            </Suspense>
            <ambientLight intensity={0.7} />
            <pointLight intensity={350} position={[1, 5, 5]} />
        </>


    )
}

export default ProjectModel;