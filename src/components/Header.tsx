import React from 'react'
import { motion } from "framer-motion"
import menu from '../json/menu.json'
import Github from '../assets/icon-github.svg'
import '../styles/Header.scss'

const menuVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1, y: 0
  },
}

export const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        {menu.map((el, i) => (
          <motion.div
            key={el.title}
            variants={menuVariants}
            initial={'hidden'}
            animate='visible'
            transition={{ delay: 0.4, type: 'just' }}
            className="header__menu__items">
            <a href={el.link}>{el.title}</a>
          </motion.div>
        ))}
      </div >
    </header >
  )
}