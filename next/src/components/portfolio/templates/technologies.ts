"use client";
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
    threejs
} from "../../../assets/portfolio"

import { TechnologyType } from "demdevvyshared/portfolio";

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
        name: "React JS",
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
    }
];

export default technologies;