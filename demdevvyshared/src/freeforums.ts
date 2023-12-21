export type FilterStringType = 'newest' | 'negative' | 'positive' | 'admin';
export type NotificationType = {
    message: string;
    trigger: boolean;
    animationKey: number;
}
export type NotificationContextType = {
    notification: NotificationType;
    triggerNotification: {
        (trigger: false): void;
        (trigger: true, message: string): void;
    }
}

export type CooldownType = {
    ip: string,
    expiresAt: Date,
    index: { expires: number }
}