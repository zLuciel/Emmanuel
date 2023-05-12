import { Link, animateScroll as scroll } from "react-scroll";

import React, { useEffect, useRef, useState } from "react";
import { NavContainer, ListNav } from "./css/Nav";
import HeaderGsap from "../Header/gsap";

export const Nav = ({ tipo, hambur, handleVisible }) => {
  const nav = useRef(null);
  const nav1 = useRef(null);
  const nav2 = useRef(null);
  const nav3 = useRef(null);
  const nav4 = useRef(null);

  useEffect(() => {
    HeaderGsap(nav, nav1, nav2, nav3, nav4);
  }, []);

  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <NavContainer tipo={tipo}>
      <ListNav hambur={hambur}>
        <li ref={nav}>
          <Link
            onClick={handleVisible}
            active={activeLink === "home"}
            onSetActive={handleSetActive}
            className={activeLink === "home" ? "active-section" : ""}
            spy={true}
            to="home"
            smooth={true}
            duration={300}
          >
            Home
          </Link>
        </li>
        <li ref={nav2}>
          <Link
            onClick={handleVisible}
            active={activeLink === "about"}
            onSetActive={handleSetActive}
            className={activeLink === "about" ? "active-section" : ""}
            spy={true}
            to="about"
            smooth={true}
            duration={300}
          >
            Conoceme
          </Link>
        </li>

        <li ref={nav1}>
          <Link
            onClick={handleVisible}
            active={activeLink === "portfolio"}
            onSetActive={handleSetActive}
            className={activeLink === "portfolio" ? "active-section" : ""}
            spy={true}
            to="portfolio"
            offset={-50}
            smooth={true}
            duration={300}
          >
            Portafolio
          </Link>
        </li>

        <li ref={nav3}>
          <Link
            onClick={handleVisible}
            active={activeLink === "skill"}
            onSetActive={handleSetActive}
            className={activeLink === "skill" ? "active-section" : ""}
            spy={true}
            to="skill"
            offset={-80}
            smooth={true}
            duration={300}
          >
            Habilidades
          </Link>
        </li>
        <li ref={nav4}>
          <Link
            onClick={handleVisible}
            active={activeLink === "contact"}
            onSetActive={handleSetActive}
            className={activeLink === "contact" ? "active-section" : ""}
            spy={true}
            to="contact"
            offset={-440}
            smooth={true}
            duration={800}
          >
            Contacto
          </Link>
        </li>
      </ListNav>
    </NavContainer>
  );
};
