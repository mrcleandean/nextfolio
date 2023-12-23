import Image from "next/image";
import Link from "next/link";
import { GiAnarchy } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-screen h-24 border-b-white border-b-2 flex justify-between items-center p-5 bg-primary">
      <Link href="/freeforums">
        <div className="flex justify-center items-center gap-2 flex-row text-white">
          <div className="bg-blue-300 rounded-md p-1 flex justify-center items-center">
            <h1 className="font-sans font-extrabold text-2xl">Free</h1>
          </div>
          <p className="font-semibold text-xl translate-y-0.5">Forums</p>
        </div>
      </Link>
      <div className="flex gap-1 items-center">
        <div className="w-10 h-10 rounded-full bg-blue-300 flex justify-center items-center">
          <Image
            src='/demdevvy.png'
            alt='Folio logo'
            width={48}
            height={48}
            className="object-contain rounded-lg cursor-pointer translate-y-0.5"
          />
        </div>
        <p className="text-white text-md font-semibold underline">Folio</p>
      </div>
    </div>
  );
};

export default Navbar;
