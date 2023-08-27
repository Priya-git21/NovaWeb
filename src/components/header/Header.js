import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Type from "./Type";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container ">
        <h1 className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1>I'm Priya Makkar</h1>
        <div>
          <Type />
        </div>
        <CTA />
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
