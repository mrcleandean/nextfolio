import Image from "next/image";
import Link from "next/link";

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
      <Link href="/">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full bg-blue-300 flex justify-center items-center">
            <Image
              src='/demdevvy-min.png'
              alt='Folio logo'
              width={48}
              height={48}
              className="object-contain rounded-lg cursor-pointer translate-y-0.5"
            />
          </div>
          <p className="text-white text-md font-semibold underline">Folio</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
