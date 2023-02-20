import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"

import Buffer from '../assets/mail.svg'

type Props = {
  src: string;
  value: string
}

export const ContactLink = ({ src, value }: Props) => {
  const [isCoppied, setIsCoppied] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const copyLink = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    if (ref.current != null) {
      ref.current.select();
      document.execCommand('copy');
      openNitice()
    }
  }

  const openNitice = () => {
    setIsCoppied(true)
    setTimeout(() => {
      setIsCoppied(false)
    }, 2000)
  }

  return (
    <div className='link-block'>
      <img src={src} alt="" />
      <input ref={ref}
        className="email-input"
        value={value}
        type="text"
        readOnly
      />
      <div className='copy-block'>
        <img
          onClick={copyLink}
          src={Buffer} alt=""
          className='icon-buffer'
        />
        <span className={`coppied-notice ${isCoppied ? 'show-notice' : ''}`}>Coppied</span>
      </div>
    </div >
  )
}