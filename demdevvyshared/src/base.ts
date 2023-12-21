import { Dispatch, SetStateAction } from 'react';

export type SetStateType<T> = Dispatch<SetStateAction<T>>

export type LoaderPropTypes = {
    globalLoading: boolean;
    entered: boolean;
    setEntered: SetStateType<boolean>;
    letters: string[];
    subTitle?: string | null
}

export type MessageObject = {
    message: string;
}