import React, { useState } from 'react'
import ArrowUp from '../assets/arrow-up.svg'
import { motion, useScroll, useMotionValueEvent, delay } from "framer-motion"

type Props = {}

export const ButtonScroll = (props: Props) => {

  const [scrollOffset, setScrollOffset] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollOffset(+latest.toFixed())
  })

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  }

  return (
    <button
      onClick={handleScrollUp}
      className={`btn-scrollup ${scrollOffset > 900 ? 'btn-show' : ''}`}>
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [0, -2, 2, -1, 1, 0] }}
        transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatDelay: 7 }}
        src={ArrowUp} alt="scroll up"
      />
    </button>
  )
}