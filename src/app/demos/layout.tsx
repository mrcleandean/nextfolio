import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Dev Demos',
    description: 'A variety of demos showcasing different features and functionalities.',
}

export default function DevDemosTemplate({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}