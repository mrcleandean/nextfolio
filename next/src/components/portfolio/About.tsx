"use client";
import { motion } from "framer-motion"
import { titleVariant, fadeIn } from "@/util/motion"
import { styles, skills, ServiceCard } from "."

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



export default About