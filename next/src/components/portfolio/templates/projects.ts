"use client";
import { sortviz, chadchess, flappybird, calccube, af, folio, click, solo } from "@/assets/portfolio";
import { ProjectsType } from "demdevvyshared/portfolio";


const projects: ProjectsType[] = [
  {
    name: "SortViz",
    description:
      "Select your algorithm, set the number of elements and iteration speed, watch your computer sort the array visually.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "D3.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      }
    ],
    image: sortviz.src,
    source_code_link: '',
    site_link: "/sortviz",
  },
  {
    name: "CalcCube",
    description:
      "Perhaps you've seen other calculator examples out there. Mine is less practical but more aesthetic because it's 3D! Give it a try.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React Three Fiber - Three.js",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
    ],
    image: calccube.src,
    source_code_link: '',
    site_link: "calccube",
  },
  {
    name: "ChadChess",
    description:
      "Are you a Chad? Do you like chess? Play with a friend on ChadChess! Sigma Chads with no friends can play against the ChadBot.",
    tags: [
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Chess.js",
        color: "orange-text-gradient",
      },
      {
        name: "react-chessboard",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      }
    ],
    image: chadchess.src,
    source_code_link: '',
    site_link: "/chadchess",
  },
  {
    name: "Free Forums",
    description:
      "Post freely on Free Forums. This is a self moderating platform where posts are automatically banished based on community votes. No sign up or required.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose.js",
        color: "orange-text-gradient",
      },
      {
        name: 'Moment.js',
        color: "blue-text-gradient",
      },
      {
        name: 'TypeScript',
        color: "green-text-gradient"
      }
    ],
    image: af.src,
    source_code_link: '',
    site_link: "/freeforums",
  },
  {
    name: "Flappy Bird Clone",
    description: "A clone of the popular Flappy Bird game made with TypeScript and JavaScript Canvas.",
    tags: [
      {
        name: 'TypeScript',
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript Canvas",
        color: "green-text-gradient",
      },
    ],
    image: flappybird.src,
    source_code_link: '',
    site_link: "/flappybirdclone",
  },
  {
    name: "Click",
    description: "A social media platform in development that groups users by collective and displays a global, zoomable interactive heatmap regarding their activity.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mapbox RN",
        color: "green-text-gradient"
      },
      {
        name: 'Expo',
        color: "pink-text-gradient"
      },
      {
        name: 'Firebase',
        color: "orange-text-gradient"
      },
      {
        name: 'TypeScript',
        color: "blue-text-gradient",
      }
    ],
    image: click.src,
    source_code_link: '',
    site_link: "/"
  },
  {
    name: "Solo",
    description: "A Tik Tok style home services marketplace meant to connect users with local service providers, such as hair stylists, barbers, and nail technicians. Meant to modernize the way we find and book services.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: 'Expo',
        color: "green-text-gradient",
      },
      {
        name: 'Firebase',
        color: "pink-text-gradient"
      },
      {
        name: 'TypeScript',
        color: "orange-text-gradient"
      }
    ],
    image: solo.src,
    source_code_link: '',
    site_link: "/"
  },
  {
    name: 'This Portfolio',
    description: 'This portfolio is a Next.js app that showcases my projects and skills. It is a work in progress and will be updated with new projects and features.',
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: 'Tailwind CSS',
        color: "green-text-gradient",
      },
      {
        name: 'React Three Fiber - Three.js',
        color: "pink-text-gradient"
      },
      {
        name: 'TypeScript',
        color: "orange-text-gradient"
      },
      {
        name: 'Framer Motion',
        color: "blue-text-gradient"
      },
      {
        name: 'React Tilt',
        color: "green-text-gradient"
      }
    ],
    image: folio.src,
    source_code_link: '',
    site_link: "/"
  }
];

export default projects;
