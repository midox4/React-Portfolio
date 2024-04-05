import "./About.scss";
import resum from "../About/pdf/resume.pdf";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
//import portfolio from "../../../assets/portfolio.jpg";
import photo from "../../../assets/myphoto.png"
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Get To Know </span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={photo}
            transition={{ ease: "easeOut", duration: 0.5 }}
          
            whileHover={{ y: -33, x: -44  }}
            //transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
            
          <h1>Full Stack Web Developer</h1>
          <p>
          &emsp;   
          `I am a dedicated and versatile <span className="devweb">Full Stack</span> <span className="wd"> Web Developer </span> 
           with a passion for creating efficient and user-friendly web 
            applications. With 3+ years of professional experience, I have expertise in various technologies, 
            including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep 
            curiosity for how things work, and it has evolved into a career where I continuously strive to learn and
            adapt to new challenges. I excel in collaborative environments and possess strong problem-solving skills
            to deliver high-quality solutions. Beyond coding,
            I am proactive in staying updated with new technologies and contributing to open-source projects`

          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={resum}
            download="resume"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
