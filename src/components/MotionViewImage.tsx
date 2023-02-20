import React from 'react'
import { motion } from "framer-motion"
import TextI from '../assets/text/i.png'


interface IProps {
  src: string;
  delay?: number;
  cn: string;
}

export const MotionViewImage: React.FC<IProps> = ({ src, delay = 0, cn }) => {
  return (
    <motion.img
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', delay: delay }}
      viewport={{ once: true }}
      src={src} className={cn} alt={cn} />


  )
}