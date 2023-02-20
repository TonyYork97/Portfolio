import React from 'react'
import Github from '../assets/icon-github.svg'
import { motion } from "framer-motion"
import { MotionLetter } from './MotionLetter'
import Resume from '../assets/resume/resume.pdf'
import '../styles/HeaderSection.scss'

type Props = {}

export const HeaderSection = (props: Props) => {
  return (
    <section className='header-section'>

      <div className='title'>
        <div className="title__first-line">
          <MotionLetter delay={0.1}>H</MotionLetter>
          <MotionLetter delay={0.2}>e</MotionLetter>
          <MotionLetter delay={0.3}>l</MotionLetter>
          <MotionLetter delay={0.4}>l</MotionLetter>
          <MotionLetter delay={0.5}>o</MotionLetter>
          <MotionLetter delay={0.6}>,</MotionLetter>
        </div>
        <div className='title__first-line'>
          <MotionLetter delay={0.1}>M</MotionLetter>
          <MotionLetter delay={0.2}>Y&nbsp;</MotionLetter>
          <MotionLetter delay={0.3}>N</MotionLetter>
          <MotionLetter delay={0.4}>A</MotionLetter>
          <MotionLetter delay={0.5}>M</MotionLetter>
          <MotionLetter delay={0.6}>E&nbsp;</MotionLetter>
          <MotionLetter delay={0.7}>I</MotionLetter>
          <MotionLetter delay={0.8}>S</MotionLetter>
        </div>
        <div className='title__first-line'>
          <MotionLetter delay={0.1}>A</MotionLetter>
          <MotionLetter delay={0.2}>N</MotionLetter>
          <MotionLetter delay={0.3}>T</MotionLetter>
          <MotionLetter delay={0.4}>O</MotionLetter>
          <MotionLetter delay={0.5}>N</MotionLetter>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='resume-block'>
        <a
          href={Resume}
          className='btn-resume'
          target="_blank"
        >Резюме</a>
        <a
          className='github-link'
          href='https://github.com/TonyYork97'
          target="_blank"
        >
          <img src={Github} alt="" />
        </a>
      </motion.div>
    </section>
  )
}