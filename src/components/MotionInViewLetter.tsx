import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Home.scss'

interface IProps {
  children: React.ReactNode
  delay: number
}

export const MotionInViewLetter: React.FC<IProps> = ({ children, delay }) => {

  return (
    <>
      <motion.span
        whileInView={{ opacity: [0, 0.4, 0.1, 1] }}
        transition={{ duration: 1, ease: 'easeOut', delay: delay }}
        viewport={{ once: true, }}
      >
        {children}
      </motion.span>
    </>
  )
}