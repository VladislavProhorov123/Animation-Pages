import React from "react";
import "./Product.css";
import { motion } from "motion/react";
import '../../App.css';

export default function Product({ src, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "50%", opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay }}
      className="product"
    >
      <img src={src} alt={title} />
      <div className="product-container"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Buy Now</button>
    </motion.div>
  );
}
