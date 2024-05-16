"use client";
import Link from "next/link"
import { ProjectsType } from "./templates/projects";
import { motion } from 'framer-motion';
import { fadeIn } from "@/util";
import Image from "next/image";
import { github } from "@/assets/portfolio";
import ProjectModel from "./ProjectModel";
import { useState } from "react";

const ProjectCard: React.FC<ProjectsType & { index: number }> = ({ index, name, description, tags, image, source_code_link, site_link, model }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <motion.div onAnimationComplete={() => setIsVisible(true)} variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl">
            <div className="relative w-full h-[230px] rounded-2xl overflow-hidden bg-black">
                <Image
                    src={image}
                    alt="Description"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                />
                {model && (
                    <div className="absolute inset-0">
                        <ProjectModel
                            isVisible={isVisible}
                            {...model}
                        />
                    </div>
                )}
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
            <div className="mt-5 cursor-pointer">
                {
                    site_link === 'development' ? (
                        <h3
                            onClick={() => alert('This project is currently in development or pending app store deployment. Please come back later to try it out!')}
                            className="text-blue-200 font-bold text-[24px] underline underline-offset-2"
                        >{name}</h3>

                    ) : site_link[0] === '/' ? (
                        <Link href={site_link}>
                            <h3 className=" text-blue-200 font-bold text-[24px] underline underline-offset-2">{name}</h3>
                        </Link>
                    ) : (
                        <a href={site_link} target="_blank">
                            <h3 className=" text-blue-200 font-bold text-[24px] underline underline-offset-2">{name}</h3>
                        </a>
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
        </motion.div>
    )
}

export default ProjectCard;