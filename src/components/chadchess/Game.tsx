"use client";
import { Chessboard } from "react-chessboard"
import { BsFillChatDotsFill, BsFlagFill } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'
import type { GameDisplayType, MoveObjectType, UserObjectType } from "@/types/chadchess"
import { Square } from "react-chessboard/dist/chessboard/types"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { usePlayerContext } from "@/contexts";
import { gigachad } from "@/assets/chadchess";

function Game({ setChatOpen }: { setChatOpen: Dispatch<SetStateAction<boolean>> }) {
    const { player, socket } = usePlayerContext();
    const [opponent, setOpponent] = useState<UserObjectType>({
        pic: null,
        name: ''
    })
    const [gameDisplay, setGameDisplay] = useState<GameDisplayType>({
        fen: 'start',
        side: 'white',
        isTurn: false
    })
    const onDrop = (sourceSquare: Square, targetSquare: Square) => {
        const move: MoveObjectType = { from: sourceSquare, to: targetSquare, promotion: 'q' };
        socket?.emit('move', socket.id, move);
        return true;
    }

    const rematch = () => {
        // socket?.emit('rematch', socket.id);
    }

    const resign = () => {
        // socket?.emit('resign', socket.id);
    }

    useEffect(() => {
        socket?.emit('getGame', socket.id);
        socket?.on('gotGame', (opponent: UserObjectType, fen: string, isWhitePlayer: boolean, isPlayersTurn: boolean) => {
            setOpponent(opponent);
            setGameDisplay(prev => ({
                ...prev,
                fen,
                side: isWhitePlayer ? 'white' : 'black',
                isTurn: isPlayersTurn
            }))
        })
        socket?.on('updateBoard', (fen: string, isPlayersTurn: boolean) => {
            setGameDisplay(prev => ({
                ...prev,
                isTurn: isPlayersTurn,
                fen
            }))
        })
        return () => {
            socket?.off('gotGame');
            socket?.off('updateBoard');
            console.log('socket bullshit');
        }
    }, [socket]);

    return (
        <div className="w-full mt-6 flex flex-col items-center max-w-md">
            <div className="w-[90%] flex justify-center flex-col relative">
                <div className="flex justify-between h-18 w-full mb-2 p-2 rounded-lg">
                    <div className="flex gap-3">
                        <img
                            alt="opponent profile picture"
                            src={opponent.pic ? opponent.pic : gigachad.src}
                            className="w-16 h-16 rounded-lg border-[1px] border-csecondary"
                        />
                        <div>
                            <p className="bg-csecondary text-white rounded-lg mt-[0.0725rem] pr-1 pl-1 pt-0.5 pb-0.5">{opponent.name === '' ? 'Unnamed Chad' : opponent.name}</p>
                        </div>
                    </div>
                    <div className="bg-csecondary p-4 rounded-lg flex justify-center itemes-center">
                        <h1 className="text-3xl text-white">1:00</h1>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="p-0.5 rounded-md violet-gradient">
                        <Chessboard
                            arePremovesAllowed={false}
                            onPieceDrop={onDrop}
                            boardOrientation={gameDisplay.side}
                            arePiecesDraggable={gameDisplay.isTurn}
                            position={gameDisplay.fen}
                            id="BasicBoard"
                            customDarkSquareStyle={{ backgroundColor: "#6380e4" }}
                            customLightSquareStyle={{ backgroundColor: 'white' }}
                            customBoardStyle={{ borderRadius: '6px' }}
                        />
                    </div>
                </div>
                <div className="flex justify-between h-18 w-full mt-2 p-2 rounded-lg">
                    <div className="flex gap-3">
                        <img
                            alt="opponent profile picture"
                            src={player.pic ? player.pic : undefined}
                            className="w-16 h-16 rounded-lg border-[1px] border-csecondary"
                        />
                        <div>
                            <p className="bg-csecondary text-white rounded-lg mt-[0.0725rem] pr-1 pl-1 pt-0.5 pb-0.5">{player.name === '' ? 'Unnamed Chad' : player.name}</p>
                        </div>
                    </div>
                    <div className="bg-csecondary p-4 rounded-lg flex justify-center itemes-center">
                        <h1 className="text-3xl text-white">1:00</h1>
                    </div>
                </div>
                <div className="w-full h-12 flex justify-around items-center mt-2">
                    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => setChatOpen(prev => !prev)}>
                        <BsFillChatDotsFill color="#6380e4" size={24} />
                        <p className="text-xs text-csecondary">Chat</p>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={rematch}>
                        <FaHandshake color="#6380e4" size={24} />
                        <p className="text-xs text-csecondary">Request Draw</p>
                    </div>
                    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={resign}>
                        <BsFlagFill color="#6380e4" size={24} />
                        <p className="text-xs text-csecondary">Resign</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game