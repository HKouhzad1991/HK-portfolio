import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Hossein.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}>
            I Design Beautiful Simple
            <br />
            Things, And I love My Job
            <br /> As A Front End Developer
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}>
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>
        <motion.div variants={fadeIn("right", "tween", 0.5, 0.1)}>
          <div className={css.gitIcon}>
            <img src="./github-purple.svg" alt="" />
          </div>
          <a className={css.github} href="https://github.com/HKouhzad1991">
            https://github.com/HKouhzad1991
          </a>
          <a className={css.email} href="mailto:hosseinkouhzad2017@gmail.com">
            hosseinkouhzad2017@gmail.com
          </a>
        </motion.div>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}>
            <img src="./HTML.svg" alt="" />
            <img src="./CSS.svg" alt="" />
            <img src="./JavaScript.svg" alt="" />
            <div className="primaryText"></div>
            <div className="secondaryText">
              
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}>
            <img src="./react-logo-svg-vector.svg" alt="" />
            <span>REACT.JS</span>
            <span>UI/UX DESIGNER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
