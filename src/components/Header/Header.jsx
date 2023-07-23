import React from "react";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={"flexCenter innerWidth ${css.container}"}>
        <div className={css.name}>Hossein Kouhzad</div>

        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
