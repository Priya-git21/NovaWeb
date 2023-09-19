import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { VscDesktopDownload } from "react-icons/vsc";

import "./topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const handleScroll = () => {
    const sections = ["home", "about", "experience", "portfolio", "contact", "footer"];
    const sectionTops = sections.map((id) => ({
      id,
      top: document.getElementById(id)?.offsetTop,
    }));

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sectionTops) {
      if (scrollPosition >= section.top) {
        setActiveNav(`#${section.id}`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <a
        href="#footer"
        onClick={() => setActiveNav("#footer")}
        className={activeNav === "#footer" ? "active" : ""}
      >
        <VscDesktopDownload />
      </a>
    </nav>
  );
};

export default Topbar;
