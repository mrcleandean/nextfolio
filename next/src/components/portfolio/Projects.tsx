"use client";
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { titleVariant, fadeIn } from "@/util/shared/motion"
import { styles, projects } from "."
import Image from "next/image"
import Link from "next/link";
import { ProjectCardPropTypes } from "demdevvyshared/portfolio";

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

const ProjectCard: React.FC<ProjectCardPropTypes> = ({ index, name, description, tags, image, source_code_link, site_link }) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
            className="md:w-[344px] lg:w-[370px] w-full"
        >
            <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl">
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt="Description"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="rounded-2xl object-contain"
                    />
                    {/* <div className="absolute inset-0 flex justify-end items-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, '_blank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-white"
                        >
                            <Image
                                src={github.src}
                                alt="github"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                    </div> */}
                </div>
                <div className="mt-5">
                    {
                        site_link !== 'development' ? (
                            <Link href={site_link}>
                                <h3 className=" text-blue-200 font-bold text-[24px] underline underline-offset-2">{name}</h3>
                            </Link>
                        ) : (
                            <h3
                                onClick={() => alert('This project is currently in development or pending app store deployment. Please come back later to try it out!')}
                                className="text-blue-200 font-bold text-[24px] underline underline-offset-2 cursor-pointer"
                            >{name}</h3>
                        )
                    }
                    <p className="mt-2 text-white text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => {
                        return (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                        )
                    })}
                </div>
            </motion.div >
        </Tilt >
    )
}

export default Projects