import {
    backendffc,
    frontendffc,
    responsiveffc,
    javascriptffc,
    dataffc,
    threejourney
} from "../../../assets/portfolio";

const education = [
    {
        name: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        description: 'Completed a comprehensive course on responsive web design principles. Gained expertise in CSS3, Flexbox, CSS Grid, and responsive design techniques to ensure optimal viewing experiences across various devices.',
        imageSrc: responsiveffc.src,
        download_name: 'Dean Kadri - Responsive Web Design Certification.png'
    },
    {
        name: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        description: 'Mastered JavaScript essentials, including ES6 concepts, algorithms, and data structures. Developed a solid foundation in problem-solving and efficient coding practices.',
        imageSrc: javascriptffc.src,
        download_name: 'Dean Kadri - JavaScript Algorithms and Data Structures Certification.png'
    },
    {
        name: 'Front End Development Libraries',
        issuer: 'freeCodeCamp',
        description: 'Acquired proficiency in popular front-end libraries and frameworks such as React.js, Redux, and jQuery. Focused on building dynamic, user-friendly interfaces.',
        imageSrc: frontendffc.src,
        download_name: 'Dean Kadri - Front End Development Libraries Certification.png'
    },
    {
        name: 'Data Visualization',
        issuer: 'freeCodeCamp',
        description: 'Learned the art and science of data representation through effective visual design. Utilized tools such as D3.js to create interactive graphs and charts.',
        imageSrc: dataffc.src,
        download_name: 'Dean Kadri - Data Visualization Certification.png'
    },
    {
        name: "Back End Development and API's",
        issuer: 'freeCodeCamp',
        description: 'Gained skills in server-side development with Node.js and Express. Designed and implemented RESTful APIs for data interchange with front-end applications.',
        imageSrc: backendffc.src,
        download_name: "Dean Kadri - Back End Development and API's Certification.png"
    },
    {
        name: 'Certificate of Completion',
        issuer: 'Three.js Journey',
        description: 'Successfully completed an immersive journey into the world of 3D graphics using Three.js. Developed the ability to render interactive 3D models and animations in a web browser.',
        imageSrc: threejourney.src,
        download_name: "Dean Kadri - Three.js Journey Certificate of Completion.png"
    }
]

export default education;