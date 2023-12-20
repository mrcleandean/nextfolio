import { SetStateType } from "./base";

export type ProjectCardPropTypes = {
    index: number,
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
    site_link: string;
}

export type AudioObjectType = {
    src: string;
    title: string;
    link: string;
}

export type ProjectsType = {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
    site_link: string;
}

export type NavLinkType = {
    href: string;
    title: string;
}

export type SkillType = {
    title: string;
    icon: string;
};

export type StylesType = {
    paddingX: string;
    paddingY: string;
    padding: string;
    mainText: string;
    titleText: string;
    subtitleText: string;
}

export type TechnologyType = {
    name: string,
    icon: string
}

export type CanvasPropTypes = {
    id: string,
    setLoadingState: (canvasId: string, isLoading: boolean) => void
}

export type FormDataType = {
    name: string;
    email: string;
    message: string;
}