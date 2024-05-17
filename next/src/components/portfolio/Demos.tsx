"use client";
import { motion } from 'framer-motion';
import { fadeIn, titleVariant } from '@/util/motion';
import { styles, demos, ProjectCard } from '.';
import { Tilt } from 'react-tilt';

const Demos = () => {
    return (
        <>
            <motion.div variants={titleVariant()}>
                <h1 className={`${styles.titleText} text-[clamp(15px,10vw,50px)] text-white`}>Demos</h1>
                <p className={`${styles.subtitleText} text-white`}>Features I&apos;ve built along the way</p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
            >
                This highlights the innovative features and mini-projects I&apos;ve developed during my journey. Each project illustrates a challenge I&apos;ve solved, demonstrating my technical skills and creative problem-solving.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-7 md:gap-3 lg:gap-7">
                {demos.map((demo, i) => {
                    return (
                        <Tilt
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450
                            }}
                            className="md:w-[344px] lg:w-[370px] w-full"
                            key={`demo-${i}`}
                        >
                            <ProjectCard
                                index={i}
                                {...demo}
                            />
                        </Tilt>

                    )
                })}
            </div>
        </>
    )
}

export default Demos;