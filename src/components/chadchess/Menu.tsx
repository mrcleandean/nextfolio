"use client";
import { motion } from "framer-motion"
import { AiOutlineArrowRight, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { chest, gigachad, liam, mega, rambo, squidward, stewie, tate } from "@/assets/chadchess";
import { MenuDisplayType } from "@/types/chadchess";
import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { BsFillChatDotsFill } from 'react-icons/bs'
import Image from "next/image";
const characters = [rambo.src, stewie.src, tate.src, mega.src, chest.src, squidward.src, liam.src, gigachad.src];

const Menu = ({ chatOpen, setChatOpen }: { chatOpen: boolean; setChatOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { player, setPlayer, socket } = usePlayerContext()
    const router = useRouter();
    const [menuDisplay, setMenuDisplay] = useState<MenuDisplayType>({
        pictureDisplay: false,
        nameText: '',
        strength: 4,
        finding: false,
        connected: false
    })
    const changeName = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setPlayer(prev => ({
                ...prev,
                name: menuDisplay.nameText.slice(0, 17)
            }))
            setMenuDisplay(prev => ({
                ...prev,
                nameText: ''
            }))
        }
    }
    const togglePictureDisplay = () => {
        setMenuDisplay(prev => ({
            ...prev,
            pictureDisplay: !prev.pictureDisplay
        }))
    }
    const changePicture = (character: string) => {
        setPlayer(prev => ({
            ...prev,
            pic: character
        }))
    }
    const changeNameText = (e: ChangeEvent<HTMLInputElement>) => {
        setMenuDisplay(prev => ({
            ...prev,
            nameText: e.target.value
        }))
    }
    const changeStrength = (e: ChangeEvent<HTMLInputElement>) => {
        setMenuDisplay(prev => ({
            ...prev,
            strength: Number(e.target.value)
        }))
    }
    const lookForPair = () => {
        socket?.emit('lookForPair', player, socket.id);
    }
    useEffect(() => {
        setMenuDisplay(prev => ({ ...prev, connected: socket ? true : false }));
        socket?.on('pairingCancelled', () => {
            setMenuDisplay(prev => ({ ...prev, finding: false }));
        })
        socket?.on('pairFound', () => {
            setMenuDisplay(prev => ({ ...prev, finding: false }));
            router.push('chadchess/online');
        })
        socket?.on('noPairFound', () => {
            setMenuDisplay(prev => ({ ...prev, finding: true }));
        })
        return () => {
            socket?.off('pairingCancelled');
            socket?.off('pairFound');
            socket?.off('noPairFound');
        }
    }, [socket, router]);
    return (
        <div className="relative w-full mt-5 max-w-3xl">
            <div className="flex flex-col items-center">
                <div className="w-full h-fit flex flex-wrap gap-2 justify-evenly">
                    <div className="relative">
                        <Image
                            alt="profile picture"
                            src={player.pic ? player.pic : gigachad.src}
                            className="object-contain w-28 h-28 rounded-lg cursor-pointer hover:w-[7.35rem] hover:h-[7.35rem] transition-all origin-center z-20 relative"
                            onClick={togglePictureDisplay}
                        />
                        <motion.p
                            initial="show"
                            animate={menuDisplay.pictureDisplay ? 'hidden' : 'show'}
                            variants={{
                                hidden: { opacity: 0 },
                                show: { opacity: 1 }
                            }}
                            className="absolute text-csecondary font-semibold text-[10px]">Click to change</motion.p>
                        <motion.div
                            className={'absolute overflow-x-auto mt-2 h-18 w-32 z-10'}
                            initial="hidden"
                            animate={menuDisplay.pictureDisplay ? 'show' : 'hidden'}
                            variants={{
                                hidden: {
                                    y: "-100%",
                                    x: '-0.5rem',
                                    opacity: 0,
                                    transition: {
                                        type: 'tween',
                                        ease: "linear",
                                        duration: 0.2
                                    }
                                },
                                show: {
                                    y: 0,
                                    opacity: 1,
                                    x: '-0.5rem',
                                    transition: {
                                        type: 'tween',
                                        ease: "linear",
                                        duration: 0.2
                                    }
                                }
                            }}
                        >
                            <div className="flex gap-1">
                                {characters.map((character, i) => {
                                    return (
                                        <Image
                                            alt="picture option"
                                            key={i}
                                            src={character}
                                            className="object-contain w-14 h-14 rounded-xl cursor-pointer z-0 border-2 border-dprimary"
                                            onClick={() => changePicture(character)}
                                        />
                                    )
                                })}
                            </div>
                            <p className="text-csecondary flex items-center font-semibold ml-1 text-[0.85rem]">Scroll <AiOutlineArrowRight size={'1rem'} className="ml-1" /></p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-1 -mt-0.5">
                        <div className="flex justify-between">
                            <div className="flex items-center relative top-2">
                                <div className={`${menuDisplay.connected ? 'bg-lime-600' : 'bg-red-500'} rounded-full w-2 h-2 ml-0.5 -mb-1.5`} />
                                <div className={`${menuDisplay.connected ? 'text-lime-600' : 'text-red-500'} ml-0.5 -mb-1.5 text-xs`}>{menuDisplay.connected ? 'Online' : 'Offline'}</div>
                            </div>
                            <button
                                onClick={() => setChatOpen(prev => !prev)}
                                className="bg-csecondary text-white p-1.5 text-xs relative top-5 right-1 rounded-xl flex gap-1 items-center justify-between"
                            >
                                {chatOpen ? 'Close' : 'Open'} {<BsFillChatDotsFill color="white" size={16} />}
                            </button>
                        </div>
                        <div className="-mt-0.5 flex flex-col">
                            <label className="text-csecondary font-semibold ml-0.5">Username</label>
                            <input
                                type="text"
                                placeholder="gigachad"
                                className="h-10 w-44 rounded-xl border-[1px] border-csecondary bg-white text-csecondary pl-2"
                                onChange={changeNameText}
                                onKeyDown={changeName}
                                value={menuDisplay.nameText}
                                name='nameText'
                            />
                            <h1 className={`${player.name === '' ? 'p-0' : 'p-[0.12rem]'} text-white font-medium mt-1.5 bg-csecondary w-fit rounded-lg tracking-widest`}>{player.name}</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 justify-evenly items-center mt-7 relative z-0">
                    <div
                        className={`${socket ? 'bg-csecondary' : 'bg-[rgb(129,158,238)] pointer-events-none'} w-44 h-14 cursor-pointer rounded-2xl flex justify-center items-center drop-shadow-[0px_2.2px_2.2px_black] hover:scale-105 transition-all`}
                        onClick={lookForPair}
                    >
                        <p className="text-white tracking-wide font-semibold text-lg">Find Game</p>
                    </div>
                    <div className="w-44 h-14 bg-csecondary cursor-pointer rounded-2xl flex justify-center items-center drop-shadow-[0px_2.2px_2.2px_black] hover:scale-105 transition-all">
                        <p className="text-white tracking-wide font-semibold text-lg">Coming Soon</p>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <input
                            name="computerStrength"
                            id="computerstrength"
                            type='range'
                            min="1"
                            max="8"
                            step="1"
                            onChange={changeStrength}
                            className="accent-csecondary"
                            value={menuDisplay.strength}
                        />
                        <label htmlFor="computerstrength" className="text-csecondary font-medium text-sm mt-1">Computer Strength:
                            <span className="text-white bg-csecondary rounded-full px-1 ml-1">{menuDisplay.strength}</span>
                        </label>
                        <div className={`${menuDisplay.finding ? '' : 'hidden'} w-12 absolute top-9 pointer-events-none flex justify-center items-center flex-col`}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-12 h-12 flex justify-center items-center"
                            >
                                <AiOutlineLoading3Quarters size={30} className="text-csecondary" />
                            </motion.div>
                            <p className="text-[11px] text-csecondary font-extrabold">Finding...</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu