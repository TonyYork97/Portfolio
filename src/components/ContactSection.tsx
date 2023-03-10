import React from 'react'
import ContactA from '../assets/a.png'
import ContactTo from '../assets/to.png'
import ContactNo from '../assets/no2.png'
import ContactLose from '../assets/lose.png'
import ContactMe from '../assets/me2.png'
import Telephone from '../assets/telephone.svg'
import Whatsapp from '../assets/whatsapp2.svg'
import Viber from '../assets/viber2.svg'
import Telegram2 from '../assets/telegram2.svg'
import Mail from '../assets/email.svg'
import { MotionViewImage } from './MotionViewImage'
import SphericalBlock from './SphericalBlock'
import { ContactLink } from './ContactLink'
import '../styles/ContactSection.scss'

export const ContactSection = () => {

  return (
    <section id='section-contacts' className="contacts">
      <div className='crooked-contact'>
        <MotionViewImage src={ContactA} cn='crooked-a' delay={0.1} />
        <MotionViewImage src={ContactTo} cn='crooked-to' delay={0.1} />
        <MotionViewImage src={ContactNo} cn='crooked-no' delay={0.1} />
        <MotionViewImage src={ContactLose} cn='crooked-lose' delay={0.1} />
        <MotionViewImage src={ContactMe} cn='crooked-me' delay={0.1} />
      </div>
      <div className='spherical-block'>
        <SphericalBlock />
      </div>
      <div className='contact-list'>
        <div className='contact-icons'>
          <img src={Telegram2} alt="" />
          <img src={Whatsapp} alt="" />
          <img src={Viber} alt="" />
        </div>
        <div className='contact-link'>
          <ContactLink src={Telephone} value="+79198163428" />
          <ContactLink src={Mail} value="antiyork@mail.ru" />
        </div>
      </div>
    </section>
  )
}