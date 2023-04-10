import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
          <span className={`${css.secondaryText}`}>
  <a href="https://github.com/ferneediaz" target="_blank" rel="noopener noreferrer">
    Explore More Works
  </a>
</span>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <a
            href="https://refinedashboard-realestate.netlify.app/"
            onClick={(e) => {
              e.preventDefault();
              openLinkInNewTab("https://github.com/ferneediaz/real-estate-dashboard-app");
            }}
          >
            <motion.img
              variants={fadeIn("up", "tween", .5, .6)}
              src="./showcase1.png"
              alt="project"
            />
          </a>
          <a
            href="https://spotify-2-kappa-ebon.vercel.app/"
            onClick={(e) => {
              e.preventDefault();
              openLinkInNewTab("https://github.com/ferneediaz/SPOTIFYV2");
            }}
          >
            <motion.img
              variants={fadeIn("up", "tween", .7, .6)}
              src="./showcase2.png"
              alt="project"
            />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openLinkInNewTab("https://github.com/ferneediaz/FREEFLOW");
            }}
          >
            <motion.img
              variants={fadeIn("up", "tween", .9, .6)}
              src="./showcase3.png"
              alt="project"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;