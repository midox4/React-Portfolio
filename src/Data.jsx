/* eslint-disable react/jsx-key */
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaUser,
  FaMailBulk,
} from "react-icons/fa";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";

import { BsDiscord } from "react-icons/bs";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import github from "../src/components/container/Skills/img/github.png";
import nextjs from "../src/components/container/Skills/img/nextjs.png";
import node from "../src/components/container/Skills/img/node.png";
import docker from "../src/components/container/Skills/img/docker.png";
import javascript from "../src/components/container/Skills/img/javascript.png";
import reactt from "../src/components/container/Skills/img/reactt.png";
import figma from "../src/components/container/Skills/img/figma.png";
import mongo from "../src/components/container/Skills/img/mongo.png";
import firebase from "../src/components/container/Skills/img/firebase.png";
import mui from "../src/components/container/Skills/img/mui.png";

export const navLinks = ["home", "about", "skills", "portfolio"];

export const socialIcons = [
  <a href="https://github.com/midox4">
    <FaGithub size={30} />
  </a>,
  <a href="https://www.linkedin.com/in/hafsi-ahmed-91919460">
    <FaLinkedin size={30} />
  </a>,
  <a href="https://www.facebook.com/geniouspo">
    <FaFacebook size={30} />
  </a>,
  <a href="https://discord.com/channels/@me/1055028448516644884">
    <BsDiscord size={30} />
  </a>,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name : ",
    value: "Hafsi Ahmed",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone:",
    value: "+216.99.148.651",
  },
  {
    id: 3,
    icon: <FaMailBulk />,
    key: "Email:",
    value: "hafsi.ahmed@hotmail.fr",
  },
];

export const experiences = [
                                                                                                                      

         

  

  {
    id: 1,
    year: "(02/2023 - Current)",
    position: "Freelance Web Developer 💻",
    text:"Designed company website including graphical user interface design utilizing ReactJs,TailwindCss and coding to meet my client’s needs and goals.",
    company: " Freelances.tn 🇹🇳",
  },

  {
    id:2 ,
    year: "(02/2020– 01/2023)",
    position: "Intern Full Stack Developer 🔬",
    text:" Designed and implemented scalable APIs and background workers for managing first and third-party proprietary licenses using Nodejs, JavaScript, Typescript.  ",
    company:"TicTac Company Software Development 🇹🇳",
  },
  {
    id: 3,
    year: " (01/2018– Current) ",
    position: "Agency Manager 👨‍💼",
    text:"Coordinate, manage and control the activity and follow-up of the sales force. Translation of strategic axes into concrete business objectives.",
    company: "Tunisian Post 🇹🇳",
  },
  {
    id: 4,
    year: " (01/2012 – 12/2017)",
    position: " IT Technical Support 🛠",
    text:"Diagnosing software or hardware faults and solving the issues over the phone or in person",
    company: "Tunisian Post 🇹🇳",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "50+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "50+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "20+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    key: "project1",
    img: work1,
    name: "project 1",
    category: "web",
    git: "https://github.com/midox4",
    demo: "https://pandora-web.netlify.app/",
  },
  {
    id: 2,
    img: work2,
    key: "project2",
    name: "project 2",
    category: "web",
    git: "https://github.com/midox4",
    demo: "https://pandora-web.netlify.app/",
  },

  {
    id: 3,
    img: work4,
    key: "project4",

    name: "project 4",
    category: "app",
    git: "https://github.com/midox4",
  },
  {
    id: 4,
    img: work5,
    name: "project 5",
    key: "project5",

    category: "app",
    git: "https://github.com/midox4",
  },
  {
    id: 5,
    img: work6,
    key: "project6",

    name: "project 6",
    category: "design",
    git: "https://github.com/midox4",
  },
    {
    id: 6,
    img: work6,
    key: "project6",

    name: "project 6",
    category: "design",
    git: "https://github.com/midox4",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const socialLink = [
  {
    id: 1,
    icon: <SlSocialGithub />,
    link: "https://github.com/midox4",
  },
  {
    id: 2,
    icon: <TiSocialFacebookCircular />,
    link: "https://www.facebook.com/geniouspo",
  },
  {
    id: 3,
    icon: <SlSocialLinkedin />,
    link: "https://www.linkedin.com/in/hafsiahmed",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "05 Street 20 March, Kairouan, Tunisia",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "hafsi.ahmed@hotmail.fr",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+216.99.148.651",
  },
];

export const Images = [
  {
    id: 1,
    img: github,
  },
  {
    id: 2,
    img: nextjs,
  },
  {
    id: 3,
    img: node,
  },
  {
    id: 4,
    img: docker,
  },
  {
    id: 5,
    img: reactt,
  },
  {
    id: 6,
    img: javascript,
  },
  {
    id: 7,
    img: figma,
  },
  {
    id: 8,
    img: mui,
  },
  {
    id: 9,
    img: mongo,
  },
  {
    id: 10,
    img: firebase,
  },
];
