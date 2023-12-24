"use client"
import { motion } from "framer-motion";
import { styles, education } from ".";
import { fadeIn, titleVariant } from "@/util";
import Link from "next/link";
import Image from "next/image";
import { Tilt } from "react-tilt";

const Education = () => {
    return (
        <>
            <motion.div variants={titleVariant()}>
                <h1 className={`${styles.titleText} text-[clamp(15px,10vw,50px)] text-white`}>Education</h1>
                <p className={`${styles.subtitleText} text-white`}>What I&apos;ve learned</p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
            >
                In my web development journey, I have learned a wide range of skills, from creating flexible layouts to building interactive websites and managing server-side code. This section highlights the courses I&apos;ve completed and the practical knowledge I&apos;ve gained, which I apply to develop user-friendly, efficient, and modern web applications.
                My knowledge and expertise goes beyond just these areas as you will soon see should we get in contact!
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-7 md:gap-3 lg:gap-7">
                {education.map((edu, i) => {
                    return (
                        <EducationCard
                            index={i}
                            key={`edu-${i}`}
                            {...edu}
                        />
                    )
                })}
            </div>
        </>
    )
}

const EducationCard = ({ index, name, issuer, description, imageSrc, download_name }: {
    index: number;
    name: string;
    issuer: string;
    description: string;
    imageSrc: string;
    download_name: string;
}) => {
    return (
        <Tilt
            options={{
                max: 15,
                scale: 1,
                speed: 450
            }}
        >
            <Link href={`${imageSrc}`} download={download_name} target="_blank">
                <motion.div
                    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
                    className="green-pink-gradient rounded-lg p-[1px] shadow-card"
                >
                    <div className="bg-tertiary rounded-lg p-6 text-white w-full h-full flex items-center justify-center gap-3">
                        <Image
                            width={70}
                            height={50}
                            src={imageSrc}
                            alt={`${name} issued from ${issuer}`}
                            className="w-auto"
                        />
                        <div>
                            <h1 className="font-bold text-lg">{name}</h1>
                            <p className="font-semibold text-sm">{issuer}</p>
                            <p className="text-xs mt-1">{description}</p>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </Tilt>
    )
}

export default Education;