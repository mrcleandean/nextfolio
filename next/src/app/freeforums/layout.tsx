import { Navbar } from "@/components/freeforums";
import type { Metadata } from "next";
import { NotificationContextProvider } from "@/contexts";
export const metadata: Metadata = {
  title: 'Free Forums',
  description: 'A self moderating forum for all your needs.',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw]">
      <Navbar />
      <NotificationContextProvider>
        {children}
      </NotificationContextProvider>
    </div>
  );
};

export default Layout;
