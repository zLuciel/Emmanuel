import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiStyledcomponents,
  SiPostgresql,
  SiFirebase,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";

const Habilidades = [
    {
      name: "React",
      icon: <FaReact />,
      color: "#00c4ff",
    },
    {
      name: "Mongodb",
      icon: <DiMongodb />,
      color: "#4DB33D",
      info:"NoSQL Db management",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "#8100f1",
      info:"Status Management",
    },
    {
      name: "Html",
      icon: <SiHtml5 />,
      color: "#f06529",
      info:"Hypertext Markup Language",
    },
    {
      name: "Css",
      icon: <SiCss3 />,
      color: "#2965f1",
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
      color: "#f0db4f",
      info:"DOM Selectors, API requests",
    },
    {
      name: "Styled Component",
      icon: <SiStyledcomponents />,
      color: "#f627bb",
      info:"Create Styles In React",
    },
    {
      name: "Next 13",
      icon: <SiNextdotjs />,
      color: "#ffffff",
      info:"Scalable Web Applications",
    },
    {
      name: "Postgresql",
      icon: <SiPostgresql />,
      color: "#0059ff",
      info:"Relational Db Management"
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#ffc400",
      info:"Realtime Database, Storage"
    },
    {
      name: "Express",
      icon: <SiNodedotjs />,
      color: "#01a51a",
      info:"Fast And Flexible Server",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "yellow",
      info:"User Interface Design",
    },
  ];

export default Habilidades