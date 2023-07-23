import React from "react";
import css from "./Header.module.scss";
import {BiPhoneCall} from "react-icons/bi";

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={"flexCenter innerWidth ${css.container}"}>
        <div className={css.name}>Hossein Kouhzad</div>

        <ul>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">EXPERIENCE</a>
          </li>
          <li>
            <a href="">PORTFOLIO</a>
          </li>
          <li>
            <a href="">TESTIMONIALS</a>
          </li>
          <li>
            <p>+989113191788</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
