import React from "react";
import css from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={"innerWidth ${css.container}"}>
        {/* upper element */}
        <div className={css.upperElements}>
          <span>
            Hey There,
            <br /> I'm Hossein.
          </span>
          <span>
            I design beautiful simple things,
            <br /> And I love what i do
          </span>
        </div>

        {/* lower elements */}

        <div className={css.lowerElements}>
                  <div className={css.experience}>
                  
                  </div>
          <div className={css.certificate}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
