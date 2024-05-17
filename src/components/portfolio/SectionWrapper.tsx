"use client";
import { staggerVariant } from "@/util/motion"
import { styles } from "."
import { motion } from "framer-motion"
import type { FC } from "react";

export type SectionWrapperProps = {
    children: React.ReactNode,
    idName?: string
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, idName }) => {
    return (
        <motion.section
            variants={staggerVariant(0.125)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName ? idName : '#'}>
                &nbsp;
            </span>
            {children}
        </motion.section>
    )
}

export default SectionWrapper