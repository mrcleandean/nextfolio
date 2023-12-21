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
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, i) => {
          return (
            <div className="w-28 h-28 flex items-center flex-col" key={technology.name}>
              <BallCanvas icon={technology.icon} id={id + i} setLoadingState={setLoadingState} />
              <p className="text-white">{technology.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Techs