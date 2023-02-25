import React from 'react'
import { motion } from "framer-motion"
import { MotionInViewLetter } from './MotionInViewLetter'
import WebMoney from '../assets/web-money.png'
import Jenny from '../assets/jenny-cosmetic.png'
import '../styles/ProjectSection.scss'
type Props = {}

export const ProjectSection = (props: Props) => {
  return (
    <section id='section-project' className='project-section'>
      <div className='title fb'>
        <MotionInViewLetter delay={0.1}>М</MotionInViewLetter>
        <MotionInViewLetter delay={0.150}>О</MotionInViewLetter>
        <MotionInViewLetter delay={0.2}>И&nbsp;</MotionInViewLetter>
        <MotionInViewLetter delay={0.250}>П</MotionInViewLetter>
        <MotionInViewLetter delay={0.3}>Р</MotionInViewLetter>
        <MotionInViewLetter delay={0.350}>О</MotionInViewLetter>
        <MotionInViewLetter delay={0.4}>Е</MotionInViewLetter>
        <MotionInViewLetter delay={0.450}>К</MotionInViewLetter>
        <MotionInViewLetter delay={0.5}>Т</MotionInViewLetter>
        <MotionInViewLetter delay={0.550}>Ы</MotionInViewLetter>
      </div>
      <div className="projects">
        <div className='project'>
          <motion.div
            initial={{ y: 50, x: -50, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-title">
            <h3>Web money</h3>
            <p>Сайт позволяющий анализировать свои доходы и расходы. Добавляя операции вы можете отслеживать куда и сколько было потрачено средств.  </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, x: 50, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-link">
            <a href="https://web-money-frontend.vercel.app/" target='_blank'>
              <img src={WebMoney} alt="" />
            </a>
          </motion.div>
        </div>
        <div className='project project-reverse'>

          <motion.div
            initial={{ y: 50, x: 50, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-title">
            <h3>Jenny Cosmetic</h3>
            <p>Онлайн магазин косметики</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, x: -50, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-link">
            <a href="https://jenny-cosmetic.vercel.app/" target='_blank'>
              <img src={Jenny} alt="" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}