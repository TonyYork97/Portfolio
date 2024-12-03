import React from 'react'
import Github from '../assets/icon-github.svg'
import { motion } from "framer-motion"
import { MotionLetter } from './MotionLetter'
import Resume from '../assets/resume/resume.pdf'
import '../styles/HeaderSection.scss'

type Props = {}

export const HeaderSection = (props: Props) => {
  const createAnimatedText = (text: string, delayStart = 0) =>
    [...text].map((char, index) => (
      <MotionLetter key={index} delay={delayStart + index * 0.1}>
        {char === ' ' ? '\u00A0' : char} {/* Неразрывный пробел */}
      </MotionLetter>
    ));

  return (
    <section className='header-section'>

      <div className='title'>
        <div className="title">
          <div className="title__first-line">{createAnimatedText('Hello,')}</div>
          <div className="title__first-line">{createAnimatedText('MY NAME IS')}</div>
          <div className="title__first-line">{createAnimatedText('ANTON')}</div>
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