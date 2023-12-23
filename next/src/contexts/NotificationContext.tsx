"use client";
import { createContext, useContext, useState } from "react";
import { Notification } from "@/components/freeforums";
import type { NotificationContextType, NotificationType } from 'demdevvyshared/freeforums';

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotificationContext must be used within a NotificationContextProvider");
    }
    return context;
}



const NotificationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [notification, setNotification] = useState<NotificationType>({
        message: '',
        trigger: false,
        animationKey: 0
    });
    const triggerNotification: {
        (trigger: false): void;
        (trigger: true, message: string): void;
    } = (trigger, message?) => {
        setNotification(prev => ({
            message: trigger ? (message as string) : prev.message,
            trigger,
            animationKey: trigger ? prev.animationKey + 1 : prev.animationKey
        }));
    }
    return (
        <NotificationContext.Provider value={{ notification, triggerNotification }}>
            {children}
            <Notification />
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider;