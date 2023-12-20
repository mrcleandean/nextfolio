import type { ChangeEvent } from "react";

export type AlgorithmHashType = {
    [key: number]: 'red' | 'gray' | 'green' | 'lightgreen'
}

export type AlgorithmFnType = (arr: number[]) => ({
    steps: number[][],
    key: AlgorithmHashType[]
})

export type RandomArrayFnType = (amount: number) => number[];

export type AlgorithmKeyType = 'bubble' | 'insertion' | 'selection'; // | 'merge' | 'quick' |

export type AlgorithmsMapType = {
    [key in AlgorithmKeyType]: AlgorithmFnType
}

export type StateType = {
    arraySteps: number[][],
    colorKey: AlgorithmHashType[],
    algorithm: AlgorithmKeyType,
    amount: number,
    delay: number,
    play: boolean,
    currentStep: number,
    interval: null | NodeJS.Timeout
}

export type ChangeInputFnType = (e: ChangeEvent<HTMLInputElement>) => void;

export type ChangeSelectFnType = (e: ChangeEvent<HTMLSelectElement>) => void;

export type BasicFnType = () => void;

export type HeaderPropType = {
    reset: BasicFnType,
    changeAlgorithm: ChangeSelectFnType,
    changeAmount: ChangeInputFnType,
    changeDelay: ChangeInputFnType,
    togglePlay: BasicFnType,
    algorithm: AlgorithmKeyType,
    amount: number,
    delay: number,
    play: boolean
}