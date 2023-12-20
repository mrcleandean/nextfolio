"use client";
import { gigachad } from "@/assets/chadchess";
import { ClientToServerSocketEventTypes, ServerToClientSocketEventTypes, UserObjectType } from "demdevvyshared/chadchess";
import { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import type { PlayerContextType } from 'demdevvyshared/chadchess';

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayerContext = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayerContext must be used within a PlayerContextProvider");
    }
    return context;

}

const PlayerContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [player, setPlayer] = useState<UserObjectType>({
        pic: gigachad.src,
        name: ''
    });
    const [socket, setSocket] = useState<null | Socket<ServerToClientSocketEventTypes, ClientToServerSocketEventTypes>>(null);
    useEffect(() => {
        const serverUrl = process.env.NEXT_PUBLIC_SOCKET_LINK;
        const initSocket: Socket<ServerToClientSocketEventTypes, ClientToServerSocketEventTypes> = io(serverUrl ? serverUrl : '');
        initSocket.on('connect', () => {
            setSocket(initSocket)
        })
        initSocket.on('disconnect', () => {
            setPlayer({
                pic: gigachad.src,
                name: ''
            });
            setSocket(null);
        })
        return () => {
            initSocket.disconnect();
        }
    }, []);
    return (
        <PlayerContext.Provider value={{ player, setPlayer, socket }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;