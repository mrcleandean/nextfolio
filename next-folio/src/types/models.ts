import type { Document } from "mongoose";

export type PostType = Document & {
    admin: boolean;
    title: string;
    username: string;
    content: string;
    dateTime: Date;
    score: number;
    parent: null | string;
    children: (string | PostType)[];
};