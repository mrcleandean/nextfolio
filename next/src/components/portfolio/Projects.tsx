"use client";
import { motion } from "framer-motion"
import { titleVariant, fadeIn } from "@/util/motion"
import { styles, projects, ProjectCard } from "."

const Projects = () => {
    return (
        <>
            <motion.div variants={titleVariant()}>
                <h1 className={`${styles.titleText} text-[clamp(15px,10vw,50px)] text-white`}>Projects</h1>
                <p className={`${styles.subtitleText} text-white`}>What I&apos;ve done</p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
            >
                Welcome to my corner of creativity and tech. I&apos;ve put together a bunch of projects that blend smart design with a personal touch. I like building fun things, so take a look around and try things out!
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-7 md:gap-3 lg:gap-7">
                {projects.map((project, i) => {
                    return (
                        <ProjectCard
                            key={`project-${i}`}
                            index={i}
                            {...project}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Projects