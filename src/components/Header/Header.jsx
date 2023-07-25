import React from "react";
import css from "./Header.module.scss";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";

const Header = () => {
  return (
    <motion.div
      initial="hissen"
      whileInView="show"
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Hossein kouhzad</div>
        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+001 (313) 345 678</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
