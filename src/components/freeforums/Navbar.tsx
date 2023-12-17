import Link from "next/link";
import { GiAnarchy } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-[100vw] h-24 border-b-white border-b-2 flex justify-between items-center p-5">
      <Link href="/freeforums" className="flex items-center p-5 text-white text-[25px]">
        <GiAnarchy size={30} color="white" />
        narchy
      </Link>
      <div className="flex items-center justify-around text-white text-[18px] w-44">
        <Link href="/freeforums/about">About</Link>
        <Link href="/freeforums/chat">Chat</Link>
      </div>
    </div>
  );
};

export default Navbar;
