import web from "../../../assets/webimg.jpeg";
import portfolio from "../../../assets/portfolio.jpg";
import Lottie from "lottie-react";
import anim from "../../../assets/anim2.json";
import "./Home.scss";

import "./Home.scss";
import { motion } from "framer-motion";
import LeftBanner from "../LeftBanner/LeftBanner";
//import { ScrollLink } from "react-scroll";
//import SS from "../../Typesentence/SS";

const Home = () => {
  return (
    <motion.div
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-col place-items-center ">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-1 transition duration-300 ease-in-out hover:opacity-50 cursor-pointer"
                src={web}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/3 text-center sm:pr-8 sm:py-8">
                <div className="w-50 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    className="object-cover  object-center h-full w-full rounded-full max-w-xs transition duration-300 ease-in-out  hover:scale-90 cursor-pointer shadow-1xl"
                    src={portfolio}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <LeftBanner />
                  {/* <h2 className="font-medium title-font mt-5 text-sky-600   text-2xl font-primary "> Hi, I'm Hafsi Ahmed</h2> */}
                  <div className="w-12 h-1  bg-sky-700 rounded mt-2 mb-4"></div>
                  <p className="text-lg">
                    {" "}
                    I m a Full Stack Web Developer based in Tunisia, i design
                    and code beautifully simple things, and i love what i do.{" "}
                    <br />
                    <span className="text-sky-600">
                      Excited to collaborate on new projects!
                    </span>
                  </p>
                </div>
              </div>
              <div className="   sm:w-2/3 sm:pl-9 sm:py-4 sm:border-l border-gray-500 sm:border-t-0 border-t mt-5 pt-0 sm:mt-0 text-center  items-center justify-items-center sm:text-left">
                <Lottie animationData={anim} className="  leading-relaxed   " />
                <p className="font-secondary mt-5 mb-5 font-bold  text-sky-600 text-4xl lg:text-5xl rotate-0">
                  Designed By Ahmed
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="talk_right"
                >
                  <a
                    href="#contact"
                    className="rounded-full md:mr-4 bg-sky-500 py-2 px-5 hover:bg-teal-500 text-white text-lg font-[800] no-underline "
                  >
                    {" "}
                    Hire Me
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </motion.div>
  );
};

export default Home;
