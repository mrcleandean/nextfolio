import {
    web,
    mobile,
    creator
} from "@/assets/portfolio"

export type SkillType = {
    title: string;
    icon: string;
}

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