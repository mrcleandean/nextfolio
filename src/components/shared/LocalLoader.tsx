"use client";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import type { CanvasPropTypes } from "demdevvyshared/portfolio";

const LocalLoader = ({ id, setLoadingState }: CanvasPropTypes) => {
    const state = useProgress();
    useEffect(() => {
        if (state.progress === 100) {
            setLoadingState(id, false);
        }
    }, [state]);
    return null;
}

export default LocalLoader;