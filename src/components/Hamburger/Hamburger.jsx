"use client";
import React, { useRef, useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ContainerHambruger, HamburgerIcon } from "./css/Hamburger";
import { Nav } from "../Nav/Nav";
import { HandleHamburguer } from "./gsap";

const Hamburger = () => {
  const hamburger = useRef(null);
  const [visible, setVisible] = useState(false);

  const handle = () => {
    HandleHamburguer(setVisible, hamburger, visible);
  };

  return (
    <>
      <HamburgerIcon>
        <GiHamburgerMenu className="icon-hamburguer" onClick={handle} />
      </HamburgerIcon>
      <ContainerHambruger ref={hamburger}>
        <Nav tipo={visible} hambur={true} />
      </ContainerHambruger>
    </>
  );
};

export default Hamburger;
