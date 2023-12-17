import { Navbar } from "@/components/freeforums";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Free Forums</title>
        <meta name="FreeForums" />
      </Head>
      <div className="flex flex-col items-center justify-center w-[100vw]">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
