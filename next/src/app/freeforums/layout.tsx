import { Navbar } from "@/components/freeforums";
import type { Metadata } from "next";
import { NotificationContextProvider } from "@/contexts";

export const metadata: Metadata = {
  title: 'Free Forums',
  description: 'A self moderating forum for all your needs.',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationContextProvider>
      <Navbar />
      <div className="w-screen min-h-screen bg-primary">
        {children}
      </div>
    </NotificationContextProvider>
  );
};

export default Layout;
