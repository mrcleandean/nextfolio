"use client";
import { gigachad } from "@/assets/chadchess";
import { usePlayerContext } from "@/contexts";
import { ChatType } from "@/shared/types/chadchess";
import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import moment from "moment";
import Image from "next/image";

function formatDate(date: Date) {
    const inputDate = moment(date);
    const today = moment();
    const yesterday = moment().subtract(1, 'day');

    if (inputDate.isSame(today, 'day')) {
        // Date is today: return time in AM/PM format
        return inputDate.format('h:mm A');
    } else if (inputDate.isSame(yesterday, 'day')) {
        // Date is yesterday: return 'Yesterday'
        return 'Yesterday';
    } else {
        // Date is before yesterday: return date in 'MMM DD' format
        return inputDate.format('MMM DD');
    }
}

const HomeChat = ({ chatOpen, setChatOpen }: { chatOpen: boolean, setChatOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { player, socket } = usePlayerContext();
    const wordLimit = 200;
    const [chats, setChats] = useState<ChatType[]>([]);
    const [userMessage, setUserMessage] = useState<Omit<ChatType, 'time'>>({
        username: player.name,
        pic: player.pic ? player.pic : gigachad.src,
        message: ''
    });
    const chatArrayAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socket?.on('chatReceived', (chat: ChatType) => {
            setChats(prev => [...prev, chat]);
        });
        socket?.on('initalChatsReceived', (chats: ChatType[]) => {
            setChats(chats);
        });
        if (chats.length === 0) {
            socket?.emit('getInitialChats', socket.id);
        }
        return () => {
            socket?.off('chatReceived');;
            socket?.off('initalChatsReceived');
        }
    }, [socket]);

    useEffect(() => {
        chatArrayAreaRef.current?.scrollTo(0, chatArrayAreaRef.current.scrollHeight);
    }, [chats]);

    useEffect(() => {
        setUserMessage(prev => ({ ...prev, username: player.name, pic: player.pic ? player.pic : gigachad.src }))
    }, [player.name, player.pic]);


    const sendChat = () => {
        if (!userMessage.message || userMessage.message.length > wordLimit) return;
        socket?.emit('chatSend', userMessage);
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
                            <div className="flex gap-1 justify-center items-center">
                                <div className='w-7 h-7 rounded-full overflow-hidden'>
                                    <Image
                                        src={chat.pic}
                                        alt="Player profile picture"
                                        width={28}
                                        height={28}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <h1>{chat.username ? chat.username : 'Anonymous Chad'}</h1>
                            </div>
                            <h1 className="ml-4">{formatDate(chat.time)}</h1>
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
                            sendChat();
                        }
                    }}
                />
                <button
                    className='bg-csecondary text-white w-20 transition-all duration-75 rounded-r-lg flex flex-col items-center justify-center gap-0.5'
                    onClick={sendChat}
                >
                    <p>Send</p>
                    <p className={`${userMessage.message.length <= wordLimit ? 'text-white' : 'text-red-500 font-semibold'} text-[0.68rem]`}>{userMessage.message.length}/{wordLimit}</p>
                </button>
            </div>
        </div>
    )
}

export default HomeChat;