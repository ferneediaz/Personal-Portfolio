
import React, { useRef } from 'react'
import { projectExperience, AboutMe } from '../../utils/data'
import css from './About.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const expVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  })

  return (
    <section className={css.wrapper} ref={ref}>
      <a className="anchor" id="about"></a>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <motion.div variants={staggerContainer} className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div key={i} variants={expVariants} className={css.exp}>
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.Skills} </span>
                  <span className="descrisecondaryTextption">{exp.Description} </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* right */}
        <motion.div variants={textVariants} className={css.rightSide}>
          <span className="primaryText">About me </span>
          {AboutMe.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About