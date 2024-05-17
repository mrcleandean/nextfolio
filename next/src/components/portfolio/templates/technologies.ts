import {
    css,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    threejs,
    npm,
    nextjs
} from "@/assets/portfolio"

export type TechnologyType = {
    name: string;
    icon: string;
}

const technologies: TechnologyType[] = [
    {
        name: "HTML 5",
        icon: html.src,
    },
    {
        name: "CSS 3",
        icon: css.src,
    },
    {
        name: "JavaScript",
        icon: javascript.src,
    },
    {
        name: "TypeScript",
        icon: typescript.src,
    },
    {
        name: 'Next JS',
        icon: nextjs.src
    },
    {
        name: "React JS & Native",
        icon: reactjs.src,
    },
    {
        name: "Redux Toolkit",
        icon: redux.src,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind.src,
    },
    {
        name: "Node JS",
        icon: nodejs.src,
    },
    {
        name: "MongoDB",
        icon: mongodb.src,
    },
    {
        name: "Three JS",
        icon: threejs.src,
    },
    {
        name: "git",
        icon: git.src,
    },
    {
        name: 'npm',
        icon: npm.src
    }
];

export default technologies;