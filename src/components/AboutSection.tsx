import React from 'react'
import { motion } from "framer-motion"
import { MotionInViewLetter } from './MotionInViewLetter'
import { MotionViewImage } from './MotionViewImage'
import TextI from '../assets/i.png'
import TextAm from '../assets/am.png'
import TextWeb from '../assets/web.png'
import TextDeveloper from '../assets/developer.png'
import TextDevelopment from '../assets/development.png'
import TextFor from '../assets/for.png'
import TextMe from '../assets/me.png'
import TextNo from '../assets/no.png'
import TextOnly from '../assets/only.png'
import TextWork from '../assets/work.png'
import TextBut from '../assets/but.png'
import TextAnd from '../assets/and.png'
import TextHobby from '../assets/hobby.png'
import '../styles/AboutSection.scss'

type Props = {}

export const AboutSection = (props: Props) => {
  return (
    <section id='section-about' className='about'>
      <div className='crooked-text'>
        <MotionViewImage src={TextI} cn='crooked-i' delay={0.05} />
        <MotionViewImage src={TextAm} cn='crooked-am' delay={0.1} />
        <MotionViewImage src={TextWeb} cn='crooked-web' delay={0.150} />
        <MotionViewImage src={TextDeveloper} cn='crooked-developer' delay={0.2} />
        <MotionViewImage src={TextDevelopment} cn='crooked-development' delay={0.250} />
        <MotionViewImage src={TextFor} cn='crooked-for' delay={0.1} />
        <MotionViewImage src={TextMe} cn='crooked-me' delay={0.1} />
        <MotionViewImage src={TextNo} cn='crooked-no' delay={0.1} />
        <MotionViewImage src={TextOnly} cn='crooked-only' delay={0.1} />
        <MotionViewImage src={TextWork} cn='crooked-work' delay={0.1} />
        <MotionViewImage src={TextBut} cn='crooked-but' delay={0.1} />
        <MotionViewImage src={TextAnd} cn='crooked-and' delay={0.1} />
        <MotionViewImage src={TextHobby} cn='crooked-hobby' delay={0.1} />
      </div>
      <div
        className={`about__text text-1`}>
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: -60, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          Мне 25 лет, я из Самары. Уже на протяжении двух лет я изучаю Веб разработку
        </motion.p>
      </div>
      <div
        className='about__text text-2 ' >
        <motion.p
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Постоянно совершенствую свои знания в области IT-Технологий, паралленльно повышаю уровень английского, легко нахожу общий язык с коллегами. И в целом люблю работать в команде
        </motion.p>
      </div>
      <div className='white-span'>
        <div>
          <MotionInViewLetter delay={0.5}>I&nbsp;&nbsp;</MotionInViewLetter>
          <MotionInViewLetter delay={0.5}>М</MotionInViewLetter>
          <MotionInViewLetter delay={0.550}>О</MotionInViewLetter>
          <MotionInViewLetter delay={0.6}>Й&nbsp;</MotionInViewLetter>
          <MotionInViewLetter delay={0.650}>С</MotionInViewLetter>
          <MotionInViewLetter delay={0.7}>К</MotionInViewLetter>
          <MotionInViewLetter delay={0.750}>И</MotionInViewLetter>
          <MotionInViewLetter delay={0.8}>Л</MotionInViewLetter>
          <MotionInViewLetter delay={0.850}>Л</MotionInViewLetter>
        </div>
      </div>
    </section>
  )
}