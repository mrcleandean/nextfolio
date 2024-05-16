"use client";
import { motion } from "framer-motion";
import { BallCanvas, technologies, styles } from ".";
import { titleVariant } from "@/util/motion";

const Techs = () => {
  return (
    <>
      <motion.div variants={titleVariant()}>
        <h1 className={`${styles.titleText} text-[clamp(15px,5vw,50px)] text-white`}>Technologies</h1>
        <p className={`${styles.subtitleText} text-white`}>what i&apos;m good at</p>
      </motion.div>
      <BallCanvas technologies={technologies} />
    </>
  )
}

export default Techs