import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Flappy Bird Clone',
    description: "A clone of the popular mobile game Flappy Bird.",
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
