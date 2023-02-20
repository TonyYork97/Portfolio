import React from 'react'
import { motion } from "framer-motion"
import '../styles/Home.scss'

interface IProps {
  children: React.ReactNode
  delay: number
}

export const MotionLetter: React.FC<IProps> = ({ children, delay }) => {
  const hVariants = {
    animate: { opacity: [0, 0.4, 0.1, 1] },
    hover: { opacity: [0.7, 0.8, 0.7, 1], delay: 0 },
    hoverEnd: { opacity: 1, delay: 0 },
  }
  return (
    <motion.div
      animate={'animate'}
      transition={{ duration: 1, ease: 'easeOut', delay: delay }}

      variants={hVariants}
      className={`title__first-line__letter`}>
      <motion.h5
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{
          scaleX: [1, 0.9, 1.1, 0.9, 1],
          scaleY: [1, 1.2, 0.8, 1.1, 1],
        }}
      >
        {children}
      </motion.h5>
    </motion.div>
  )
}