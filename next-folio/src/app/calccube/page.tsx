"use client";
import { Canvas } from "@react-three/fiber"
import { Calculator } from "@/components/calccube"
import { useState, useCallback, useRef } from "react";
import type { CameraType, ObjVectorType } from "@/types/calccube";
import { Vector3 } from "three";
import gsap from "gsap";
import { FolioLink, Loader, LocalLoader } from '@/components/shared';

const CalcCube = () => {
    const [camera, retrieveCamera] = useState<CameraType>(null)
    const lookAtVector = useRef<Vector3>(new Vector3(0, 0, 0));
    const camAnim = useCallback((camPos: ObjVectorType, camVec: ObjVectorType) => {
        if (camera === null) return
        const tl = gsap.timeline()
        tl
            .to(lookAtVector.current, {
                onUpdate: () => camera?.lookAt(lookAtVector.current),
                overwrite: 'auto',
                ease: 'elastic.out(1,0.75)',
                duration: 2,
                x: camVec.x,
                y: camVec.y,
                z: camVec.z
            })
            .to(camera.position, {
                overwrite: 'auto',
                ease: 'elastic.out(1,0.75)',
                duration: 2,
                x: camPos.x,
                y: camPos.y,
                z: camPos.z
            }, '<')
    }, [camera])

    const [loadingStates, setLoadingStates] = useState({
        calculator: true
    });
    const [entered, setEntered] = useState(false);
    const setLoadingState = useCallback((canvasId: string, isLoading: boolean) => {
        setLoadingStates(prevStates => ({ ...prevStates, [canvasId]: isLoading }));
    }, []);
    const globalLoading = Object.values(loadingStates).some(isLoading => isLoading);
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center relative">
                <div className="absolute top-3 left-3 flex justify-center items-start gap-3 flex-col">
                    <FolioLink title="Calc Cube" />
                    <div className="flex gap-2 items-center justify-center z-10 select-none">
                        <button onClick={() => camAnim({ x: -5, y: 5.5, z: 0 }, { x: -7, y: 0, z: 0 })} className="bg-white border-none py-0.5 px-1.5 rounded-xl text-black cursor-pointer">View 1</button>
                        <button onClick={() => camAnim({ x: 1.2, y: 12, z: 0 }, { x: 0, y: 0, z: 0 })} className="bg-white border-none py-0.5 px-1.5 rounded-xl text-black cursor-pointer">View 2</button>
                        <button onClick={() => camAnim({ x: 4, y: 9.6, z: 7 }, { x: 0, y: 0, z: 0 })} className="bg-white border-none py-0.5 px-1.5 rounded-xl text-black cursor-pointer">View 3</button>
                    </div>
                </div>
                <Canvas camera={{
                    position: [3.6, 9.6, 5.6]
                }}>
                    <Calculator retrieveCamera={retrieveCamera} />
                </Canvas>
                <LocalLoader id="calculator" setLoadingState={setLoadingState} />
            </div>
            <Loader
                globalLoading={globalLoading}
                entered={entered}
                setEntered={setEntered}
                letters={['C', 'A', 'L', 'C', ' ', 'C', 'U', 'B', 'E']}
                subTitle={'Ideal on Desktop'}
            />
        </>
    )
}



export default CalcCube