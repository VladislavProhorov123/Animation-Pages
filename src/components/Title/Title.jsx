import React from "react";
import { motion } from "motion/react";
import "./Title.css";

export default function Title({ children, delay = 0 }) {
  return (
    <div className="title-container">
      <motion.h1 initial={{y: "200%"}} animate={{y: 0}} exit={{y: "-200%"}} transition={{duration: 0.5, delay}}>{children}</motion.h1>
    </div>
  );
}
