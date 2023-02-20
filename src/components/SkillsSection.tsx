import React from 'react'
import { motion } from "framer-motion"
import '../styles/SkillsSection.scss'

type Props = {}

export const SkillsSection = (props: Props) => {
  return (
    <section className='skills'>
      <div className="top-skills">
        <div
          className='title'>
          <motion.h3
            initial={{ color: '#000000' }}
            whileInView={{ color: '#FFFFFF' }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className='fb'>Навыки</motion.h3>
        </div>
        <div className="level-skills">

          <div className="progress-block">
            <div className='progress'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '90%', }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="progress-level level-1"></motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='progress-title'>HTML, CSS</motion.div>
          </div>


          <div className="progress-block">
            <div className='progress'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '86%', }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="progress-level level-2"></motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='progress-title'>JAVASCRIPT</motion.div>
          </div>

          <div className="progress-block">
            <div className='progress'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '91%', }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="progress-level level-3"></motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} className='progress-title'>REACT</motion.div>
          </div>

          <div className="progress-block">
            <div className='progress'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '71%', }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="progress-level level-4"></motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} className='progress-title'>NODEJS</motion.div>
          </div>

          <div className="progress-block">
            <div className='progress'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '73%', }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="progress-level level-5"></motion.div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} className='progress-title'>GIT</motion.div>
          </div>
        </div>
      </div>
      <div className="bottom-skills">
        <div className='title'>
          <motion.h3
            initial={{ color: '#000000' }}
            whileInView={{ color: '#FFFFFF' }}
            viewport={{ once: true }}

            transition={{ duration: 3 }} className='fb'>ТАКЖЕ:</motion.h3>
        </div>
        <div className="all-skils-block">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='all-skils-block__title'>SCSS, TAILWIND, MATERIAL UI</motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} className='all-skils-block__title'>TYPESCRIPT, REDUX TOOLKIT, MOBX</motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} className='all-skils-block__title'>REST API, WEBSOCKET</motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='all-skils-block__title'>NPM, WEBPACK</motion.div>
        </div>
      </div>
    </section>
  )
}