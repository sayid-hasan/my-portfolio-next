import { FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiStrapi,
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

// define the type
interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  data: {
    description: string;
    demoLink: string;
    githubLink: string;
  };
  stack: Array<{
    name: string;
    icon: JSX.Element;
    iconColor: string;
  }>;
}
// export const projects = [
//   {
//     id: 1,
//     title: "3D Solar System Planets to Explore",
//     des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     img: "/p1.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//     link: "https://github.com/adrianhajdin?tab=repositories",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     img: "/p2.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//     link: "https://github.com/adrianhajdin/zoom-clone",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     img: "/p3.svg",
//     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//     link: "https://github.com/adrianhajdin/ai_saas_app",
//   },
//   {
//     id: 4,
//     title: "Animated Apple Iphone 3D Website",
//     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//     img: "/p4.svg",
//     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//     link: "https://github.com/adrianhajdin/iphone",
//   },
// ];
export const projects: Project[] = [
  {
    id: 1,
    title: "AWSSCHOLARS : Empower Education",
    image: "https://i.imgur.com/liNTIdN.jpg",
    category: "Full Stack",
    data: {
      description: `Introducing AWSSCHOLARS, a cutting-edge platform dedicated to bridging the gap between talented individuals and life-changing scholarship opportunities. This service-based website streamlines the scholarship search and application process, providing comprehensive details and a seamless user experience. Our role-based dashboard ensures efficient management and personalized interactions for all users.`,
      demoLink: "https://assignment-12-af8ea.web.app",
      githubLink: "https://github.com/sayid-hasan/assignment-12-client",
    },
    stack: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        iconColor: "purple",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "purple",
      },
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "React",
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
        iconColor: "Javascript",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
        iconColor: "NodeJS",
      },
      {
        name: "ExpressJS",
        icon: <SiExpress />,
        iconColor: "HTML",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        iconColor: "HTML",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "HTML",
      },
      {
        name: "Stripe",
        icon: <SiStrapi />,
        iconColor: "HTML",
      },
      {
        name: "MaterialUI",
        icon: <SiMui />,
        iconColor: "HTML",
      },
    ],
  },
  {
    id: 2,
    title: "Bloogys: Innovate, Share, Inspire",
    image: "https://i.imgur.com/Vy4E0nL.png",
    category: "Full Stack",
    data: {
      description: `Welcome to Bloogys, a premier platform for AI and tech enthusiasts. Bloogys offers a secure space for sharing insights, engaging with the community, and staying updated on AI trends. With Firebase-powered authentication, our platform ensures top-notch security and privacy. Enjoy a sleek UI developed with React, HTML, CSS, TailwindCSS, DaisyUI, and MaterialUI. Publish blogs, join discussions, and explore diverse articles in our knowledge hub. Backed by Node.js, MongoDB, and Firebase, Bloogys guarantees efficient data management and performance. Discover Bloogys and start your journey today!`,
      demoLink: "https://grand-alpaca-1c792e.netlify.app",
      githubLink: "https://github.com/sayid-hasan/assignment-11",
    },
    stack: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        iconColor: "purple",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "purple",
      },
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "React",
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
        iconColor: "Javascript",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
        iconColor: "NodeJS",
      },
      {
        name: "ExpressJS",
        icon: <SiExpress />,
        iconColor: "HTML",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        iconColor: "HTML",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "HTML",
      },
      {
        name: "MaterialUI",
        icon: <SiMui />,
        iconColor: "HTML",
      },
      {
        name: "Framer motion",
        icon: <SiFramer />,
        iconColor: "HTML",
      },
    ],
  },
  {
    id: 3,
    title: "Art Showcase: Explore, Select, Admire",
    image: "https://i.imgur.com/phRBJgi.jpg",
    category: "Full Stack",
    data: {
      description: `Discover Art Showcase, your ultimate destination for exploring a diverse collection of artworks. Designed for art enthusiasts, Art Showcase offers detailed information, pricing, and ratings to help you find the perfect piece. With personalized user data management and secure storage in MongoDB, our platform ensures a tailored and reliable experience. Enjoy a seamless interface built with HTML, CSS, TailwindCSS, React.js, JavaScript, and DaisyUI, powered by a robust backend using Node.js, Express.js, and MongoDB, with Firebase authentication. Visit our live demo and discover art like never before.`,
      demoLink: "https://assignment-10-50456.web.app",
      githubLink: "https://github.com/sayid-hasan/assignment-10-client",
    },
    stack: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        iconColor: "purple",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "purple",
      },
      {
        name: "React",
        icon: <FaReact />,
        iconColor: "React",
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
        iconColor: "Javascript",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs />,
        iconColor: "NodeJS",
      },
      {
        name: "ExpressJS",
        icon: <SiExpress />,
        iconColor: "HTML",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        iconColor: "HTML",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "HTML",
      },
      {
        name: "MaterialUI",
        icon: <SiMui />,
        iconColor: "HTML",
      },
    ],
  },
];

export const skill = [
  {
    name: "HTML",
    src: `./icons8-html-48.png`,
    intro: "",
  },
  {
    name: "CSS",
    src: `./icons8-css-48.png`,
    intro: "",
  },
  {
    name: "Tilewind CSS",
    src: `./icons8-tailwind-css-48.png`,
    intro: "",
  },
  {
    name: "Javascript",
    src: `./icons8-javascript-64.png`,
    intro: "",
  },
  {
    name: "ReactJs",
    src: `./icons8-react-js-64.png`,
    intro: "",
  },
  {
    name: "NodeJs",
    src: `./icons8-node-js-48.png`,
    intro: "",
  },
  {
    name: "NextJs",
    src: `./nextjs-icon.png`,
    intro: "",
  },
  {
    name: "mongoDB",
    src: `./icons8-mongo-db-64.png`,
    intro: "",
  },
  {
    name: "ExpressJs",
    src: `./icons8-express-js-64.png`,
    intro: "",
  },
  {
    name: "Git",
    src: `./icons8-git-64.png`,
    intro: "",
  },
  {
    name: "Github",
    src: `./github.png`,
    intro: "",
  },
  {
    name: "Firebase",
    src: `./icons8-firebase-48.png`,
    intro: "",
  },
  {
    name: "Figma",
    src: `./icons8-figma-64.png`,
    intro: "",
  },
  {
    name: "VS code",
    src: `./vs-code.png`,
    intro: "",
  },
  {
    name: "Typescript",
    src: `./typeScript.png`,
    intro: "",
  },
  {
    name: "Redux",
    src: `./redux.png`,
    intro: "",
  },
  {
    name: "AWS",
    src: `./aws.png`,
    intro: "",
  },
  {
    name: "Prisma",
    src: `./prisma.png`,
    intro: "",
  },
  {
    name: "Docker",
    src: `./docker.png`,
    intro: "",
  },
  {
    name: "PostgreSQL",
    src: `./postgresql.png`,
    intro: "",
  },
];
