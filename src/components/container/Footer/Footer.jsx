import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="fdown">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        className="footer"
      >
        <div className="copyright">
          <p className="text-center mb-1 ">
            Copyright &copy; {new Date().getFullYear()} {""}
            All Rights Reserved. Made By <span> Hafsi.Ahmed</span>
          </p>
        </div>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="footer"
        ></motion.div>
      </div>
    </div>
  );
};

export default Footer;
