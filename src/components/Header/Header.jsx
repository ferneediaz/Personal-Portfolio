import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
  const Header = () => {
    const menuRef = useRef(null);
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>狄亞志</div>
        <ul
          className={`flexCenter ${css.menu}`}
          
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#about">Education</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>0978548735</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

           {/* for medium and small screens */}
           <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;