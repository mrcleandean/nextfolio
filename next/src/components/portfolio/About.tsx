"use client";
import { motion } from "framer-motion"
import { titleVariant, fadeIn } from "@/util/motion"
import { styles, skills } from "."
import { Tilt } from "react-tilt"
import Image from "next/image"

const About = () => {
    return (
        <>
            <motion.div variants={titleVariant()}>
                <h1 className={`${styles.titleText} text-[clamp(15px,10vw,50px)] text-white`}>About Me</h1>
                <p className={`${styles.subtitleText} text-white`}>and my journey</p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a dedicated creator bringing life to unique digital experiences. With a passion for building experiences that resonate, I wear many hats — a Web Developer, a Mobile Developer, and at heart, a Creative Developer. My journey has been one of continuous learning and innovation, where each project is a step forward in my quest to push the boundaries of what I can do. Making user experiences that are both dynamic and functional is what I do best, and I&apos;m always looking for new ways to do it.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-8">
                {skills.map((service, i) => {
                    return (
                        <ServiceCard key={service.title} index={i} {...service} />
                    )
                })}
            </div>
        </>
    )
}

const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: string }) => {
    return (
        <Tilt
            className="xs:w-[250px] w-full"
            options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
        >
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <Image
                        src={icon}
                        alt={title}
                        width={64}
                        height={64}
                        className="object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default About