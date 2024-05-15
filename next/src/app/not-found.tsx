import { styles } from "@/components/portfolio";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-screen overflow-hidden flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center touch-none h-fit w-fit">
                <div className={`${styles.titleText} ${styles.mainText} text-white z-10 relative`}>NOT<br />FOUND</div>
                <div className={`${styles.titleText} ${styles.mainText} text-white blur-[7.5px] z-0`}>NOT<br />FOUND</div>
                <div className={`${styles.titleText} ${styles.mainText} stroked z-30`}>NOT<br />FOUND</div>
                <div className="absolute -bottom-20 flex flex-col justify-center items-center">
                    <p className="text-white italic font-bold text-lg">You sneaky beaky... </p>
                    <Link
                        href="/"
                        className=" text-blue-200 font-bold text-lg cursor-pointer underline underline-offset-2"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;