"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BsPlayFill, BsPauseFill, BsFillSkipForwardFill } from 'react-icons/bs'
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from 'react-icons/bi'
import { SiYoutube } from 'react-icons/si'
import { audioObjects } from ".";

const AudioPlayer = ({ entered }: { entered: boolean }) => {
    const [audioDisplay, setAudioDisplay] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioObject, setAudioObject] = useState<typeof audioObjects[0]>(audioObjects[0]);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    // useEffect(() => {
    //     setAudioDisplay(true);
    // }, []);

    // useEffect(() => {
    //     if (entered && audio) {
    //         audio.play();
    //         audio.loop = true;
    //         audio.volume = 0.08;
    //         setIsPlaying(true);
    //     }
    // }, [entered]);

    useEffect(() => {
        audio?.pause();
        const next = new Audio(audioObject.src);
        next.loop = true;
        next.volume = 0.08;
        if (isPlaying) next.play();
        setAudio(next)
        return () => {
            audio?.pause();
            next?.pause();
        }
    }, [audioObject]);

    const fwdAudio = () => {
        if (audioObject === null) return;
        const newIndex = audioObjects.indexOf(audioObject) + 1;
        if (newIndex >= audioObjects.length) {
            setAudioObject(audioObjects[0]);
            return;
        }
        setAudioObject(audioObjects[newIndex]);
    }

    return (
        <motion.div
            initial="hidden"
            variants={{
                hidden: {
                    x: '-100%',
                    transition: {
                        duration: 0.5,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                },
                show: {
                    x: '0',
                    transition: {
                        duration: 0.5,
                        type: 'tween',
                        ease: 'easeOut'
                    }
                }
            }}
            animate={audioDisplay ? 'show' : 'hidden'}
            className={`fixed top-[4.85rem] left-0 w-44 bg-white-500 bg-white z-30 flex flex-col rounded-br-md`}
        >
            <div className="w-full flex justify-center items-center relative">
                <h1 className="text-black font-extrabold text-center h-6">Play Audio</h1>
                <div onClick={() => setAudioDisplay(prev => !prev)} className="absolute -right-7 bg-white h-6 w-7 rounded-br-md flex items-center justify-center cursor-pointer">
                    {audioDisplay ? <BiSolidLeftArrowAlt color="black" /> : <BiSolidRightArrowAlt color="black" />}
                </div>
            </div>
            <div className="w-full flex justify-evenly items-center py-2">
                <div className={`${isPlaying ? 'bg-red-500' : 'bg-green-300'} p-1.5 rounded-full cursor-pointer flex justify-center items-center`} onClick={() => {
                    if (isPlaying) audio?.pause();
                    else audio?.play();
                    setIsPlaying(prev => !prev);
                }}>
                    {isPlaying ? <BsPauseFill color="white" /> : <BsPlayFill color="white" />}

                </div>
                <div className="bg-black p-1.5 rounded-full cursor-pointer flex justify-center items-center" onClick={fwdAudio}>
                    <BsFillSkipForwardFill color="white" />
                </div>
                <a href={`${audioObject.link}`} target="_blank" rel="noopener noreferrer">
                    <div className="bg-black p-1.5 rounded-full cursor-pointer flex justify-center items-center">
                        <SiYoutube color="white" />
                    </div>
                </a>
            </div>
            <div className="w-full text-black flex justify-center">
                <h1 className="text-[0.6rem] py-1">{audioObject.title}</h1>
            </div>
        </motion.div>
    )
}

export default AudioPlayer