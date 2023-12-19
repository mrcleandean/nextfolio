import type { Metadata } from 'next'
import { Header } from '@/components/chadchess';
import { PlayerContextProvider } from '@/contexts';

export const metadata: Metadata = {
    title: 'Chad Chess',
    description: "Alpha chads can play chess with a friend, sigma chads can play chess with the computer.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="bg-dprimary w-screen min-h-screen flex flex-col relative z-10">
                <Header />
                <PlayerContextProvider>
                    {children}
                </PlayerContextProvider>
            </div >
        </>
    )
}
