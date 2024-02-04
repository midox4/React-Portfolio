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

          <p>
            <h1>Full Stack <span className="devweb">Web Developer</span></h1>
            &emsp; I am a <span className="devweb">Full Stack</span> <span className="wd"> Web Developer</span> with 4+ years of experience. 
            I have strong foundation in front-end & back-end development and am skilled
            in creating user-friendly and responsive web applications using
            React and its ecosystem. I am a strong communicator and team
            player. I am always looking to improve my skills and
            stay up-to-date with the latest best practices in web development. I
            am excited to continue growing as a developer and making meaningful
            contributions to projects and teams.
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
