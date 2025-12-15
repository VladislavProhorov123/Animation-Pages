import React from 'react'
import './Body.css' 
import { motion } from 'motion/react'

export default function Body({ children, delay = 0}) {
  return (
    <div className='body-container'> 
      <motion.p initial={{x: "100%"}} animate={{x: 0}} exit={{x: "-100%"}} transition={{duration: 0.5, delay}}>{children}</motion.p>
    </div>
  )
}
