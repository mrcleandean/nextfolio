import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Calc Cube',
    description: 'Interact with a 3D calculator!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}