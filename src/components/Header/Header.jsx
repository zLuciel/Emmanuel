import React, { useRef, useEffect } from "react";
import { HeaderContainer, Nav, ListNav } from "./css/Header";
import { gsap } from "gsap";

const Header = () => {
  const nav = useRef();
  const nav1 = useRef();
  const nav2 = useRef();
  const nav3 = useRef();
  const nav4 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([nav.current, nav1.current, nav2.current, nav3.current, nav4.current], { opacity: 0 }) // establecer opacidad inicial en 0
      .fromTo(
        [nav.current, nav1.current, nav2.current, nav3.current, nav4.current],
        { y: -100 },
        {
          delay:1,
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.8,
          },
          ease: "expo.out",
        }
      );
  }, []);

  return (
    <HeaderContainer>
      <Nav>
        <ListNav>
          <li ref={nav}>Home</li>
          <li ref={nav1}>Portafolio</li>
          <li ref={nav2}>About</li>
          <li ref={nav3}>Skill</li>
          <li ref={nav4}>Contact</li>
        </ListNav>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;



