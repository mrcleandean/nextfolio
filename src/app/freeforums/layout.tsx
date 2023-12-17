import { Navbar } from "@/components/freeforums";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
