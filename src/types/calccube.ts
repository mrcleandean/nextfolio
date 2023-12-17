import { Camera, Mesh, Scene } from "three";
import type { Dispatch, SetStateAction } from "react";

export type ObjVectorType = {
    x: number;
    y: number;
    z: number;
}
export type CameraType = Camera | null;
export type RetrieveCameraType = Dispatch<SetStateAction<CameraType>>
export type CalcType = {
    operator: string;
    prevOperand: string;
    currentOperand: string;
    power: boolean;
}
export type SetCalcType = Dispatch<SetStateAction<CalcType>>
export type NodeOperatorKeyType = 'Divide' | 'Multiply' | 'Plus' | 'Minus'
export type NodeKeysType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'Decimal' | 'Equals' | 'AC' | 'PlusOrMinus' | 'Percent' | 'IO' | 'Del' | 'Rand' | 'Pi' | NodeOperatorKeyType;
export type KeyMapKeysType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '=' | 'Enter' | '+' | '-' | '*' | 'x' | '/' | 'Escape' | ',' | '%' | '`' | 'Backspace' | 'r' | 'p'
export type GLTFType = {
    nodes: {
        [key in NodeKeysType]: Mesh;
    }
    scene: Scene;
}
export type NodeKeyMapType = {
    [key in KeyMapKeysType]: Mesh
} & {
    [key: string]: Mesh | undefined;
}