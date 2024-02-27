"use client";
import { motion } from "framer-motion";
import { BallCanvas, technologies, styles } from ".";
import { titleVariant } from "@/util/shared/motion";
import type { CanvasPropTypes } from "demdevvyshared/portfolio";

const Techs: React.FC<CanvasPropTypes> = ({ id, setLoadingState }) => {
  return (
    <>
      <motion.div variants={titleVariant()}>
        <h1 className={`${styles.titleText} text-[clamp(15px,5vw,50px)] text-white`}>Technologies</h1>
        <p className={`${styles.subtitleText} text-white`}>what i&apos;m good at</p>
      </motion.div>
      <BallCanvas technologies={technologies} id={id} setLoadingState={setLoadingState} />
    </>
  )
}

export default Techs