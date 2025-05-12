import React, { useState } from "react";
import "../Component/Css/Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCodeBranch,
  FaLaptopCode,
  FaTools,
  FaServer,
  FaCogs,
  FaArrowRight
} from "react-icons/fa";
import { FaRoute, FaProjectDiagram, FaLayerGroup, FaChrome } from 'react-icons/fa';
import { SiFigma, SiAdobephotoshop, SiSwagger, SiBootstrap, SiFormik, SiIntellijidea, SiHellofresh, SiShell, SiSpring, SiFramer, SiPrime, SiPrimereact, SiPostman } from 'react-icons/si';
import { Shell } from "lucide-react";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showSkills, setShowSkills] = useState(false);

  const skillData = [
    {
      name: "JavaScript",
      description: "JavaScript is a language for making websites interactive and dynamic. It adds features like animations and real-time updates.",
      icon: <FaJs className="skill-icon" />
    },
    {
      name: "React",
      description: "React is a JavaScript library for building user interfaces, especially single-page applications. It helps create reusable UI components",
      icon: <FaReact className="skill-icon" />
    },
    {
      name: "Tailwind CSS",
      description: "Tailwind CSS is a utility-first CSS framework that allows you to style elements by applying pre-defined classes directly in the HTML, making it fast and customizable",
      icon: <FaLayerGroup className="skill-icon" />
    },
    {
      name: "Git",
      description: "Distributed version control system for tracking changes in source code during development.",
      icon: <FaCodeBranch className="skill-icon" />
    },
    {
      name: "Material-UI",
      description: "React components for faster and easier web development implementing Google's Material Design.",
      icon: <FaCogs className="skill-icon" />
    },
    {
      name: "VS Code",
      description: "Popular source-code editor with support for debugging, syntax highlighting, and extensions.",
      icon: <FaLaptopCode className="skill-icon" />
    },
    {
      name: "Redux",
      description: "Predictable state container for JavaScript apps, helping manage global state.",
      icon: <FaProjectDiagram className="skill-icon" />
    },
    {
      name: "Redux Toolkit",
      description: "A modern approach to writing Redux logic more efficiently and concisely.",
      icon: <FaTools className="skill-icon" />
    },
    {
      name: "CSS",
      description: "Style sheet language used for describing the presentation of a document written in HTML.",
      icon: <FaCss3Alt className="skill-icon" />
    },
    {
      name: "HTML",
      description: "Standard markup language for documents designed to be displayed in a web browser.",
      icon: <FaHtml5 className="skill-icon" />
    },
    {
      name: "Bootstrap",
      description: "Bootstrap is a CSS framework with ready-to-use responsive components and layouts.",
      icon: <SiBootstrap className="skill-icon" />
    },
    {
      name: "React Router",
      description: "Standard routing library for React, enabling navigation between views.",
      icon: <FaRoute className="skill-icon" />
    },
    {
      name: "Prime React",
      description: "PrimeReact is a rich set of open-source UI components for React, offering prebuilt themes and responsive design. It’s ideal for building professional, enterprise-level applications quickly.",
      icon: <SiPrimereact className="skill-icon" />
    },
    {
      name: "Framer Motion ",
      description: "Framer Motion is a powerful React library for creating smooth animations and transitions with simple, declarative code.",
      icon: <SiFramer className="skill-icon" />
    },
    {
      name: "Postman ",
      description: "Postman is a tool that developers use to test, develop, and debug APIs easily by sending requests and viewing responses.",
      icon: <SiPostman className="skill-icon" />
    },
    {
      name: "Figma",
      description: "Figma is a web-based UI/UX design tool for creating and collaborating on interface designs.",
      icon: <SiFigma className="skill-icon" />
    },
    {
      name: "Photoshop",
      description: "Photoshop is used for image editing, digital painting, and graphic design work..",
      icon: <SiAdobephotoshop className="skill-icon" />
    },
    {
      name: "Swagger",
      description: "Swagger helps design, document, and test RESTful APIs with interactive UI.",
      icon: <SiSwagger className="skill-icon" />
    },
    {
      name: "API",
      description: "APIs connect your frontend to backend services, enabling data exchange.",
      icon: <FaServer className="skill-icon" />
    },
    {
      name: "Formik",
      description: "Formik simplifies form handling and validation in React apps.",
      icon: <SiFormik className="skill-icon" />
    },
    {
      name: "Chrome DevTools",
      description: "Web developer tools built directly into the Chrome browser for debugging.",
      icon: <FaChrome className="skill-icon" />
    }, {
      name: "IntelliJ",
      description: "IntelliJ is a professional IDE mainly used for Java, but supports other languages too.",
      icon: <SiIntellijidea className="skill-icon" />
    },
    {
      name: "Lucide-React",
      description: "lucide-react is a React library for using customizable, open-source SVG icons in your app.",
      icon: <Shell/>
    }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  const toggleSkillsView = () => {
    setShowSkills(!showSkills);
  };

  return (


    <section className="skills-container" id="Skills">
      <div className={`skills-content ${showSkills ? 'skills-shown' : ''}`}>
        <div className={`skills-left ${showSkills ? 'hidden' : ''}`}>
          <h1 className="SkillsSecond"><span style={{ color: "#4fc3f7" }}>𝚂𝚔𝚒𝚕𝚕𝚜 </span> 𝚊𝚗𝚍 𝚃𝚘𝚘𝚕𝚜</h1>
          <p className="skillThree">
            𝙰𝚜 𝚊 𝙵𝚛𝚘𝚗𝚝𝚎𝚗𝚍 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛, 𝙸 𝚜𝚙𝚎𝚌𝚒𝚊𝚕𝚒𝚣𝚎 𝚒𝚗 𝚌𝚛𝚊𝚏𝚝𝚒𝚗𝚐 𝚎𝚕𝚎𝚐𝚊𝚗𝚝 𝚊𝚗𝚍 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚞𝚜𝚎𝚛 𝚒𝚗𝚝𝚎𝚛𝚏𝚊𝚌𝚎𝚜 𝚞𝚜𝚒𝚗𝚐 𝚖𝚘𝚍𝚎𝚛𝚗 𝚝𝚘𝚘𝚕𝚜 𝚕𝚒𝚔𝚎 𝚁𝚎𝚊𝚌𝚝, 𝚁𝚎𝚍𝚞𝚡-𝚂𝚊𝚐𝚊, 𝚊𝚗𝚍 𝚃𝚊𝚒𝚕𝚠𝚒𝚗𝚍 𝙲𝚂𝚂. 𝙸 𝚏𝚘𝚌𝚞𝚜 𝚘𝚗 𝚌𝚛𝚎𝚊𝚝𝚒𝚗𝚐 𝚜𝚎𝚊𝚖𝚕𝚎𝚜𝚜 𝚊𝚗𝚍 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝𝚒𝚟𝚎 𝚠𝚎𝚋 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚜 𝚝𝚑𝚊𝚝 𝚊𝚛𝚎 𝚋𝚘𝚝𝚑 𝚟𝚒𝚜𝚞𝚊𝚕𝚕𝚢 𝚊𝚙𝚙𝚎𝚊𝚕𝚒𝚗𝚐 𝚊𝚗𝚍 𝚑𝚒𝚐𝚑𝚕𝚢 𝚏𝚞𝚗𝚌𝚝𝚒𝚘𝚗𝚊𝚕. 𝚆𝚒𝚝𝚑 𝚊 𝚜𝚝𝚛𝚘𝚗𝚐 𝚏𝚘𝚞𝚗𝚍𝚊𝚝𝚒𝚘𝚗 𝚒𝚗 𝚏𝚛𝚘𝚗𝚝𝚎𝚗𝚍 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜, 𝙸 𝚊𝚒𝚖 𝚝𝚘 𝚍𝚎𝚕𝚒𝚟𝚎𝚛 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚊𝚗𝚍 𝚜𝚌𝚊𝚕𝚊𝚋𝚕𝚎 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜. 𝙼𝚢 𝚎𝚡𝚙𝚎𝚛𝚝𝚒𝚜𝚎 𝚕𝚒𝚎𝚜 𝚒𝚗 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚍𝚢𝚗𝚊𝚖𝚒𝚌, 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 𝚒𝚗𝚝𝚎𝚛𝚏𝚊𝚌𝚎𝚜 𝚝𝚑𝚊𝚝 𝚊𝚍𝚊𝚙𝚝 𝚝𝚘 𝚟𝚊𝚛𝚒𝚘𝚞𝚜 𝚍𝚎𝚟𝚒𝚌𝚎𝚜 𝚊𝚗𝚍 𝚜𝚌𝚛𝚎𝚎𝚗 𝚜𝚒𝚣𝚎𝚜.
          </p>
          <button className="view-skills-btn" onClick={toggleSkillsView}>
            View Skills <FaArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className={`skills-right ${showSkills ? 'visible' : ''}`}>
          <button className="back-btn" onClick={toggleSkillsView}>
            ← Back
          </button>
          <div className="skill-boxes">
            {skillData.map((skill, index) => (
              <div
                key={index}
                className={`skill-box ${selectedSkill === skill ? 'active' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

     
      {selectedSkill && (
        <div className="skill-modal-overlay" onClick={closeModal}>
          <div className="skill-modal-content" onClick={e => e.stopPropagation()}>
            <button className="skill-modal-close "  onClick={closeModal}>×</button>
            <div className="skill-modal-header">
              <div className="book">
                <p className="descriptionBook">{selectedSkill.description}</p>
                <div className="cover">
                 <h1 className="mt-5"> {selectedSkill.icon}</h1>
                  <h3 className="hovermeName">
                    {selectedSkill.name}</h3>
                  <br/>
                  <h3>𝙷𝚘𝚟𝚎𝚛 𝙼𝚎</h3>
                  <p className="ArrowMe">🢃</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;