"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { styles, BuddhaCanvas } from "."
import { motion } from "framer-motion"

const Hero = () => {
    const lenis = useLenis();
    return (
        <div className="relative w-screen h-screen flex items-center justify-center" id="hero">
            <div className="absolute inset-0 top-20 flex items-center justify-center pointer-events-none touch-none">
                <div className={`${styles.titleText} ${styles.mainText} text-white z-10`}>DEAN<br />KADRI</div>
                <div className={`${styles.titleText} ${styles.mainText} text-white blur-[7.5px] z-0`}>DEAN<br />KADRI</div>
                <div className={`${styles.titleText} ${styles.mainText} stroked z-30`}>DEAN<br />KADRI</div>
            </div>
            <div className="absolute inset-0 top-20 z-20 flex items-center justify-center">
                <BuddhaCanvas />
            </div>
            <div
                className="absolute bottom-5 rounded-2xl z-40 border-2 w-6 h-14 flex justify-center hover:cursor-pointer"
                onClick={() => lenis?.scrollTo('#projects')}
            >
                <motion.div
                    animate={{
                        y: [4, 35, 4],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                    className="rounded-full bg-white w-3 h-3"
                />
            </div>
        </div>
    )
}

export default Hero