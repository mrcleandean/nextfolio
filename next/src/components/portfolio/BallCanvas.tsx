"use client";
import { Bounds, Decal, Float, OrbitControls, PerspectiveCamera, View, useTexture } from "@react-three/drei"
import type { TechnologyType } from "demdevvyshared/portfolio";

const BallCanvas = ({ technologies }: { technologies: TechnologyType[] }) => {
    return (
        <div className="relative w-full">
            <div className="w-full flex flex-row justify-center items-center flex-wrap">
                {technologies.map((tech, i) => {
                    return (
                        <View
                            key={`technology-view-${i}`}
                            index={i}
                            className="w-32 h-32 flex justify-center items-center"
                        >
                            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                            <Bounds fit clip observe margin={1.2}>
                                <Ball imgUrl={tech.icon} />
                            </Bounds>
                        </View>
                    )
                })}
            </div>
        </div>
    )
}

const Ball = ({ imgUrl }: { imgUrl: string }) => {
    const [decal] = useTexture([imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh castShadow receiveShadow scale={2.75}>
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <OrbitControls makeDefault enableZoom={false} />
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




export default BallCanvas;