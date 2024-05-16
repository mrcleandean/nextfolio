"use client";
import { useProgress } from "@react-three/drei";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import type { CanvasPropTypes } from "demdevvyshared/portfolio";

export type LocalLoaderProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LocalLoader: FC<LocalLoaderProps> = ({ setIsLoading }) => {
    const state = useProgress();
    useEffect(() => {
        if (state.progress === 100) {
            setIsLoading(false);
        }
    }, [state]);
    return null;
}

export default LocalLoader;