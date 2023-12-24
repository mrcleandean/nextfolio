"use client";
import {
    web,
    mobile,
    creator
} from "@/assets/portfolio"

import { SkillType } from "demdevvyshared/portfolio";

const skills: SkillType[] = [
    {
        title: "Web Developer",
        icon: web.src
    },
    {
        title: 'Mobile Developer',
        icon: mobile.src
    },
    {
        title: 'Creative Developer',
        icon: creator.src
    }
];

export default skills;