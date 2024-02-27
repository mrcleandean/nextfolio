import { motion } from 'framer-motion';
import { PhoneCanvas, styles } from '.';
import { fadeIn, titleVariant } from '@/util';
import { Canvas } from '@react-three/fiber';

const Development = () => {
    return (
        <>
            <motion.div variants={titleVariant()}>
                <h1 className={`${styles.titleText} text-[clamp(15px,10vw,50px)] text-white`}>Development</h1>
                <p className={`${styles.subtitleText} text-white`}>What I&apos;m creating</p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
            >
                Projects that will be available for viewing shortly on the web, the App Store or the Google Play Store.
            </motion.p>
            <PhoneCanvas />
        </>
    )
}

export default Development;