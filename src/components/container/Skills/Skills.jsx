import { useState } from "react";
import "./Skills.scss";
import { Images } from "../../../Data";
import { experiences } from "../../../Data";
import { finishes } from "../../../Data";
import { motion } from "framer-motion";

// import github from "../Skills/img/github.png";
// import html from "../Skills/img/html.png";
// import node from "../Skills/img/node.png";
// import tailwind from "../Skills/img/tailwind.png";
// import javascript from "../Skills/img/javascript.png";
//import reactt from "../Skills/img/reactt.png";

// const Skills = () => {
// }

// export default Skills

// Define the Images array

// Assuming you have an Image component to render individual images

const Skills = () => {
  const [active, setActive] = useState(1);
  const Image = ({ img, name }) => {
    return (
      <div>
        <img src={img} alt={name} />
      </div>
    );
  };

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Experiences</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Experiences
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        {active === 1 &&
          Images.map((image) => (
            <div className="img" key={image.id}>
              <Image img={image.img} name={image.name} />
            </div>
          ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="experiencs"
      >
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                  <p>{experience.text}</p>
                </div>
              </div>
            );
          })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="finishes_container"
      >
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">{finish.number}</div>
              <h4 className="item_name">{finish.itemName}</h4>
            </div>
          );
        })}
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        <div>
          {Images.map((image) => (
            <div className="tools">
              {" "}
              <Image key={image.id} img={image.img} name={image.name} />
            </div>
          ))}
        </div>
      </motion.div> */}
    </div>
  );
};

export default Skills;
