import React from 'react'
import { projectExperience, AboutMe } from '../../utils/data'
import css from './About.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const About = () => {
  return (
    <section className={css.wrapper}>
    <a className="anchor" id="about"></a>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
    >
      {/* left side */}
      <div className={css.leftSide}>
        {projectExperience.map((exp, i) => {
          return (
            <motion.div
              variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
              className={css.exp}
              key={i}
            >
              <div style={{ background: exp.bg }} className="flexCenter">
                <exp.icon size={25} color="white" />
              </div>
              <div>
                <span>{exp.name}</span>
                <span className="secondaryText">{exp.Skills} </span>
                <span className="descrisecondaryTextption">
                  {exp.Description}{" "}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
  
      {/* right */}
      <motion.div
        variants={textVariant(0.5)}
        className={css.rightSide}
      >
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