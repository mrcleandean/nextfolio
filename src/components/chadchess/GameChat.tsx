"use client";
import { useRef, useState, type Dispatch, type SetStateAction, useEffect } from "react";
import { usePlayerContext } from "@/contexts";
import { type GameChatType } from "@/types/chadchess";
import { BsFillChatDotsFill } from "react-icons/bs";

const GameChat = ({ chatOpen, setChatOpen }: { chatOpen: boolean, setChatOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { player, socket } = usePlayerContext();
    const wordLimit = 75;
    const [chats, setChats] = useState<GameChatType[]>([
        {
            username: 'Developer',
            message: 'Request Draw functionality coming soon!'
        },
        {
            username: 'Developer',
            message: 'Resign functionality coming soon!'
        },
        {
            username: 'Developer',
            message: 'Timer functionaity coming soon!'
        }
    ]);
    const [userMessage, setUserMessage] = useState<GameChatType>({
        username: player.name,
        message: ''
    });
    const chatArrayAreaRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        socket?.on('gameChatReceived', (chat: GameChatType) => {
            setChats(prev => [...prev, chat]);
        })
        return () => {
            socket?.off('gameChatReceived');
        }
    }, [socket]);

    useEffect(() => {
        chatArrayAreaRef.current?.scrollTo(0, chatArrayAreaRef.current.scrollHeight);
    }, [chats]);

    const sendGameChat = () => {
        if (!userMessage.message || userMessage.message.length > wordLimit) return;
        socket?.emit('gameChatSend', userMessage, socket.id);
        setUserMessage(prev => ({ ...prev, message: '' }));
    }

    return (
        <div className={`${chatOpen ? 'flex' : 'hidden'} bg-dprimary absolute bottom-0 z-50 md:relative w-full h-[calc(100vh-2.5rem)] flex-col justify-end`}>
            <button
                onClick={() => setChatOpen(prev => !prev)}
                className="md:hidden bg-csecondary text-white p-1.5 text-xs absolute z-[60] top-3 left-3 rounded-xl flex gap-1 items-center justify-between border-2 border-dprimary"
            >
                {chatOpen ? 'Close' : 'Open'} {<BsFillChatDotsFill color="white" size={16} />}
            </button>
            <div
                ref={chatArrayAreaRef}
                className='w-full flex flex-col overflow-scroll gap-2 mb-2 mt-2 p-2'
            >
                {chats.map((chat, i) => (
                    <div className='w-full bg-gray-200 rounded-xl' key={i}>
                        <div className='flex justify-between items-center p-1 bg-csecondary text-sm text-white rounded-t-xl'>
                            <h1>{chat.username ? chat.username : 'Anonymous Chad'}</h1>
                        </div>
                        <h1 className='text-csecondary text-sm p-1.5 break-words'>{chat.message}</h1>
                    </div>
                ))}
            </div>
            <div className={`${socket ? '' : 'pointer-events-none'} w-full flex rounded-xl p-2 pt-0`}>
                <textarea
                    className='bg-gray-200 w-full h-20 text-csecondary resize-none p-2 rounded-l-lg border-none outline-none'
                    placeholder={socket ? 'Say hi to fellow Chads!' : 'Fix your connection to chat.'}
                    value={userMessage.message}
                    onChange={(e) => setUserMessage(prev => ({ ...prev, message: e.target.value }))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            sendGameChat();
                        }
                    }}
                />
                <button
                    className='bg-csecondary text-white w-20 transition-all duration-75 rounded-r-lg flex flex-col items-center justify-center gap-0.5'
                    onClick={sendGameChat}
                >
                    <p>Send</p>
                    <p className={`${userMessage.message.length <= wordLimit ? 'text-white' : 'text-red-500 font-semibold'} text-[0.68rem]`}>{userMessage.message.length}/{wordLimit}</p>
                </button>
            </div>
        </div>
    )
}

export default GameChat;