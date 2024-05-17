"use client";
import { useProgress } from "@react-three/drei";
import { type Dispatch, type FC, type SetStateAction, useEffect } from "react";

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