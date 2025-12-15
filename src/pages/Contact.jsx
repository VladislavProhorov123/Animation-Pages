import React from "react";
import Title from "../components/Title/Title.jsx";
import Body from "../components/Body/Body.jsx";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="page contact">
      <Title delay={0.75} className="page-title">
        Contact Us
      </Title>
      <Body delay={0.75}>
        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" rows="4" />
          <button type="submit">Send Message</button>
        </form>
      </Body>

      <motion.div
        className="slide"
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
      />
      <motion.div
        className="circle"
        animate={{ height: 0, width: 0, borderRadius: "100%" }}
        exit={{ width: "100%", borderRadius: 0, height: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </section>
  );
}
