import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ja145xt",
        "template_6386h8g",
        form.current,
        "YNejKVNsZC2Tiq2yp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Message Sent Successfully !", {
      position: "bottom-center",
    });
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <Form ref={form} onSubmit={sendEmail}>
        <div className="contact_form">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container"
          >
            <h3>Just Say Hi 😍😃</h3>
            <p className="contact_text">
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
            {contacts.map((contact) => {
              return (
                <div className="contact_left" key={contact.id}>
                  <div className="icon">{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              );
            })}
            <div className="social_icons">
              {socialIcons.map((socialIcon, index) => {
                return <div key={index}>{socialIcon}</div>;
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right"
          >
            <h3>Get In Touch</h3>
            <div className="row">
              <input
                type="text"
                placeholder="Full Name"
                name="fname"
                required
                autoFocus
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <input type="email" placeholder="Email" name="mail" required />
            </div>
            <div className="row">
              <textarea placeholder="Message" name="msg" required></textarea>
            </div>
            <div className="btnn">
              <Button type="submit">Submit</Button>
            </div>
          </motion.div>

          <ToastContainer />
        </div>
      </Form>
    </div>
  );
};

export default Contact;
