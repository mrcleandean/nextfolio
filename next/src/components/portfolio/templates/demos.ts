import { paginate, roomvo } from "@/assets/portfolio";
import { ProjectsType } from "demdevvyshared/portfolio";

const demos: ProjectsType[] = [
    {
        name: "Paginate with Boundary",
        description: "A simple visualizer which shows how pagination works with a boundary. Set the page number and page length, and watch the visualizer display the relevant range without overflowing.",
        tags: [
            {
                name: "React.js",
                color: "blue-text-gradient",
            }
        ],
        image: paginate.src,
        source_code_link: '',
        site_link: "/demos/paginate-with-boundary",
    },
    {
        name: 'Roomvo Views',
        description: 'A demo which allows the user to enter and exit view mode on an image carousel. Watch the images nicely animate and scale when toggling modes, and animate on deletion, add and swipe.',
        tags: [
            {
                name: 'React.js',
                color: "blue-text-gradient",
            },
            {
                name: 'Framer Motion',
                color: "green-text-gradient"
            },
            {
                name: 'Leap Tools',
                color: 'pink-text-gradient'
            }
        ],
        image: roomvo.src,
        source_code_link: 'https://github.com/mrcleandean/roomvodemo',
        site_link: 'https://m4z62t-5173.csb.app/'
    }
]

export default demos;