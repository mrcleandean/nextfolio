"use client";
import { sortviz, chadchess, flappybird, calccube, af } from "@/assets/portfolio";
import { ProjectsType } from "demdevvyshared/portfolio";


const projects: ProjectsType[] = [
  {
    name: "SortViz",
    description:
      "Select your algorithm, set the number of elements and iteration speed, watch your computer sort the array visually.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "VanillaJS",
        color: "green-text-gradient",
      },
      {
        name: "D3",
        color: "pink-text-gradient",
      },
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
        name: "@React-Three/Fiber",
        color: "blue-text-gradient",
      },
      {
        name: "@React-Three/Drei",
        color: "green-text-gradient",
      },
    ],
    image: calccube.src,
    source_code_link: '',
    site_link: "calccube",
  },
  // {
  //   name: "Agar.io Clone",
  //   description:
  //     "A clone of Agar.io. Includes movement, eat, split and capture mechanics. A whole decimeter of fun! Online functionality coming soon.",
  //   tags: [
  //     {
  //       name: "p5.js",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: sortviz.src,
  //   source_code_link: "https://github.com/",
  //   site_link: "/agarclone",
  // },
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
        name: "Others",
        color: "pink-text-gradient",
      },
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
        name: "ReactJS",
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
    ],
    image: af.src,
    source_code_link: '',
    site_link: "/freeforums",
  },
  // {
  //   name: "Minecraft Clone",
  //   description:
  //     "A clone of the iconic game. Includes block placement, block breaking, movement and inventory functionalities.",
  //   tags: [
  //     {
  //       name: "React-three/fiber",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: minecraft.src,
  //   source_code_link: "https://github.com/",
  //   site_link: "/minecraftclone",
  // },
  {
    name: "Flappy Bird Clone",
    description: "You already know!",
    tags: [
      {
        name: "JavaScript Canvas",
        color: "blue-text-gradient",
      },
    ],
    image: flappybird.src,
    source_code_link: '',
    site_link: "/flappybirdclone",
  },
  {
    name: "Click",
    description: "You already know!",
    tags: [
      {
        name: "JavaScript Canvas",
        color: "blue-text-gradient",
      },
    ],
    image: flappybird.src,
    source_code_link: '',
    site_link: "/flappybirdclone"
  }
];

export default projects;
