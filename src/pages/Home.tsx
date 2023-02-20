import React, { useEffect } from 'react'
import { HeaderSection } from '../components/HeaderSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectSection } from '../components/ProjectSection'
import { ContactSection } from '../components/ContactSection'
import '../styles/Home.scss'

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='home'>
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </div >
    </>
  )
}