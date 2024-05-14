"use client";
import { Tilt } from "react-tilt"
import Link from "next/link"
import { ProjectCardPropTypes } from "demdevvyshared/portfolio"
import { motion } from 'framer-motion';
import { fadeIn } from "@/util";
import Image from "next/image";
import { github } from "@/assets/portfolio";

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
                    {source_code_link && (
                        <div className="absolute inset-0 flex justify-end items-end m-3 card-img_hover">
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
                        </div>
                    )}
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

export default ProjectCard;