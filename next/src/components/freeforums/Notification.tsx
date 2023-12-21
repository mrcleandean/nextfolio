import { motion, useAnimation } from "framer-motion";
import { useNotificationContext } from "@/contexts";

const Notification = () => {
    const controls = useAnimation();
    const {
        notification: { message, trigger, animationKey },
        triggerNotification
    } = useNotificationContext();
    const displayDuration = 4;

    return (
        <motion.div
            key={animationKey}
            variants={{
                hidden: {
                    y: '120%',
                    transition: {
                        type: 'tween',
                        ease: "linear",
                        duration: 0.2
                    }
                },
                show: {
                    y: '20%',
                    transition: {
                        type: 'tween',
                        ease: "linear",
                        duration: 0.2,
                    }
                }
            }}
            initial="hidden"
            animate={trigger ? "show" : "hidden"}
            onAnimationComplete={() => {
                if (trigger) {
                    controls.start({
                        width: '0%',
                        transition: {
                            ease: "linear",
                            duration: displayDuration
                        }
                    }).then(() => {
                        triggerNotification(false);
                    });
                } else {
                    controls.set({ width: '100%' });
                }
            }}
            className="fixed bottom-0 w-48 h-20 bg-white border-2 border-black rounded-md text-black flex justify-center items-center"
        >
            <motion.div
                animate={controls}
                className="absolute bottom-0 left-0 bg-black h-3 w-full"
            />
            <h1>{message}</h1>
        </motion.div>
    )
}

export default Notification;