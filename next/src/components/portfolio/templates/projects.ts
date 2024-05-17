import { sortviz, chadchess, flappybird, calccube, folio, click, solo, voxer } from "@/assets/portfolio";

export type ProjectModelType = {
  src: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color?: string;
  axis?: 'x' | 'y' | 'z';
  invert?: boolean;
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
  model?: ProjectModelType;
}

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
    source_code_link: 'https://github.com/mrcleandean/sortviz',
    site_link: "https://sortviz-tau.vercel.app/",
    model: {
      src: '/sortviz.glb',
      position: [0, 0.2, 0],
      rotation: [0, 0, 0],
      scale: 1
    }
  },
  {
    name: "CalcCube",
    description:
      "Perhaps you've seen other calculator examples out there. Mine is more fun and more aesthetic because it's 3D! Give it a try!",
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
    source_code_link: 'https://github.com/mrcleandean/calccube',
    site_link: "https://calccube.vercel.app/",
    model: {
      src: '/calc.glb',
      position: [0, -0.4, 0],
      rotation: [Math.PI * 0.5, 0, 0],
      scale: 3.4,
      axis: 'z',
      invert: true
    }
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
    source_code_link: 'https://github.com/mrcleandean/chadchess',
    site_link: "/chadchess",
    model: {
      src: '/rook/scene.gltf',
      position: [0, -1.5, 0],
      rotation: [0.5, 0, 0.2],
      scale: 0.8,
      color: "#6380e4"
    }
  },
  {
    name: "Voxer",
    description:
      "This is a unique social experiment where the community holds the power. Engage in discussions, share your views, and use your votes to directly moderate content, steering the platform away from centralized control. Join Voxer and shape the conversation in a truly democratic space.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Upload Thing",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "orange-text-gradient",
      },
      {
        name: 'Next Auth',
        color: "blue-text-gradient",
      },
      {
        name: 'TypeScript',
        color: "green-text-gradient"
      }
    ],
    image: voxer.src,
    source_code_link: 'https://github.com/mrcleandean/voxer',
    site_link: "https://voxer-ten.vercel.app/",
    model: {
      src: '/voxer.glb',
      position: [0, 0, 0],
      rotation: [Math.PI * 0.5, 0, 0],
      scale: 315,
      axis: 'z',
      invert: true
    }
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
    source_code_link: 'https://github.com/mrcleandean/flappybirdclone',
    site_link: "https://flappybirdclone-pi.vercel.app/",
    model: {
      src: '/flappy.glb',
      position: [0, -4, 0],
      rotation: [0, 0, 0],
      scale: 2
    }
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
    source_code_link: 'https://github.com/mrcleandean/click',
    site_link: "development",
    model: {
      src: '/earth.glb',
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: 1.75
    }
  },
  {
    name: "Solo",
    description: "A TikTok style home services marketplace in development meant to connect users with local service providers, such as hair stylists, barbers, and nail technicians. Meant to modernize the way we find and book services.",
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
    source_code_link: 'https://github.com/mrcleandean/solo',
    site_link: "development",
    model: {
      src: '/solo.glb',
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: 0.5
    }
  },
  {
    name: 'This Portfolio',
    description: 'This portfolio is a Next.js app that showcases my projects and skills. It is a work in progress and will be updated with new projects and features. (GitHub repo going public after heavy ChadChess refactor)',
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
    site_link: "/",
    model: {
      src: '/a.glb',
      position: [0.145, 0.135, 0],
      rotation: [0, 0, 0],
      scale: 0.65
    }
  }
];

export default projects;
