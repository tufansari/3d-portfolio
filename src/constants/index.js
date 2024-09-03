import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  ucboyutlu,
  job,
  smartpro,
  realestate,
  movieapp,
  tripwhisperer,
  threejs,
  mysql,
  mr1,
  mr2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "My SQL",
    icon: mysql,
  },

];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "SmartPro Academy",
    icon: smartpro,
    iconBg: "#383E56",
    date: "May 2022 - Oct 2022",
    points: [
      "During my internship as a web developer, I gained hands-on experience in building and maintaining websites.",
      "I worked closely with a team to develop user-friendly and responsive web applications, using JavaScript, HTML, CSS, and various frameworks.",
      "This role allowed me to enhance my coding skills, collaborate effectively in a professional environment.",
      "And contribute to real-world projects, ensuring that they met both client expectations and industry standards.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Abb Garjan Group",
    icon: job,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2022",
    points: [
      "Construction of an e-commerce site similar infunctionality to Google Maps with Chakra UI.",
      "UI design with specific frameworks like Material UI and DevExpress.",
      "Creating reusable components and making them ready to use web services APIs and UX.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Üç Boyutlu Yazılım Bilgi ve İletişim Sistemleri Ltd. Şti.",
    icon:ucboyutlu,
    iconBg: "#383E56",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Provide support for an omnichannel software product and creating functions and interfaces with JavaScript, Oracle(PL/SQL).",
      "Implementing market sales integrations.",
      "Web services APIs.",
    ],
  },
  {
    title: "Freelance Javascript Developer",
    company_name: "Freelance",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Present",
    points: [
      "Developing reusable components with React.js.",
      "Implementing responsive design for cross-platform compatibility.",
      "Managing state with tools like Redux or Context API.",
      "Debugging and optimizing code for performance.",
      "Collaborating with back-end developers to integrate APIs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tufan proved me wrong.",
    name: "Yasin Sezer",
    designation: "SAP PM Consultant",
    company: "SPRO",
    image: mr1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their team mate's success like Tufan does.",
    name: "Orhan Ümit Keskin",
    designation: "Product Owner",
    company: "AnnounceKit",
    image: mr2,
  },
];

const projects = [
  {
    name: "Real Estate Layout",
    description:
      "In this project, a static real estate website layout was created using HTML, CSS, and JavaScript. The page features a responsive design, ensuring smooth visibility on both mobile and desktop devices. With a user-friendly interface, it allows users to view property listings, apply filters, and access detailed information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/tufansari/layout-realestate",
  },
  {
    name: "Movie Guide",
    description:
      "This movie guide project was developed using JavaScript and React, integrating web services to fetch and display real-time movie data. The application provides users with detailed information on movies, including ratings, reviews, and trailers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webapi",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/tufansari/movieapp-dbapi",
  },
  {
    name: "Trip Whisperer",
    description:
      "This Food & Travel project was built using JavaScript and React, incorporating the Google Maps API and Material UI for a sleek and functional design. The application allows users to explore restaurants and travel destinations on an interactive map, providing location details, reviews, and ratings. Material UI was utilized to create a clean, responsive interface that enhances user experience across different devices. The integration of Google Maps API ensures accurate and real-time location data for a seamless exploration experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleMapsApi",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
      {
        name: "RapidApi",
        color: "orange-text-gradient",
      },
    ],
    image: tripwhisperer,
    source_code_link: "https://github.com/tufansari/react-tripwhisperer",
  },
];

export { services, technologies, experiences, testimonials, projects };