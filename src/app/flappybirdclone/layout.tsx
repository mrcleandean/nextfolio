import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Flappy Bird Clone',
    description: "Play a clone of the popular game Flappy Bird!",
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