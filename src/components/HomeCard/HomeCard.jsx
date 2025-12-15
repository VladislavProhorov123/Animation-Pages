import React from 'react'
import { motion } from 'motion/react'
import './HomeCard.css'

export default function HomeCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "50%", opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut", delay }}
      className="home-card"
    >
        {children}
    </motion.div>
  )
}
