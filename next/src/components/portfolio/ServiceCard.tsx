"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/util/motion";
import { FC } from "react";

export type ServiceCardProps = {
    index: number,
    title: string,
    icon: string
}

const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => {
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

export default ServiceCard;