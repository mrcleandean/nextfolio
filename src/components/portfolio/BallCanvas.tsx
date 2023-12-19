"use client";
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { LocalLoader } from '@/components/shared'
import type { CanvasPropTypes } from "@/types/portfolio";

const BallCanvas = ({ icon, id, setLoadingState }: CanvasPropTypes & { icon: string }) => {
    return (
        <>
            <Canvas
                frameloop="always"
                gl={{ preserveDrawingBuffer: true }}
            >
                <Ball imgUrl={icon} />
                <Preload all />
            </Canvas>
            <LocalLoader id={id} setLoadingState={setLoadingState} />
        </>
    )
}

const Ball = ({ imgUrl }: { imgUrl: string }) => {
    const [decal] = useTexture([imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    map={decal}
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                />
            </mesh>
        </Float>
    )
}

export default BallCanvas