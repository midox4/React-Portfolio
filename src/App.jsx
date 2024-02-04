import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Home from "./components/container/Home/Home";
import Portfolio from "./components/container/Portfolio/Portfolio";
import Skills from "./components/container/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="up">
        <Navbar />
        <Home index />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <a
          style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
          href="#up"
        >
          <button className="scroll2Top">
            {" "}
            <FaArrowUp />
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
