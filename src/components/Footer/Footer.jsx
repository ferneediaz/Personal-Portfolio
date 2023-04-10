import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion"
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.container}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:dananferneediaz@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Luzhu, Kaohsiung Taiwan</p>
          </div>
          <ul className={css.menu}>
         <li><a href="#about">About</a></li>
          <li><a href="#about">Education</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#work"></a></li>
          <li><a href="#portfolio">portfolio</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;