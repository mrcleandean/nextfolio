export type AudioObjectType = {
    src: string;
    title: string;
    link: string;
}

const audioObjects: AudioObjectType[] = [
    {
        src: '/audio/boneheads.mp3',
        title: 'Lord Lorenz - Bone Headz',
        link: 'https://www.youtube.com/watch?v=TZgeu62Cwu8'
    },
    {
        src: '/audio/slowedreverb.mp3',
        title: 'cochise - tell em (feat. $not)',
        link: 'https://www.youtube.com/watch?v=SBrpkDZ5Luk&t=0s'
    },
    {
        src: '/audio/brokenheart.mp3',
        title: 'Lord Lorenz - BROKEN HEART 4 U',
        link: 'https://www.youtube.com/watch?v=2eMWFHVG7fM'
    }
];

export default audioObjects;