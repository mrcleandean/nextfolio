import { Navbar } from "@/components/freeforums";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Free Forums',
  description: 'A self moderating forum for all your needs.',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
