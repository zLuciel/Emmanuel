import React from "react";
import { HeaderContainer } from "./css/Header";
import { Nav } from "../Nav/Nav";
const Header = () => {
  
  return (
    <> 
    <HeaderContainer>
     <Nav type={true}/>
    </HeaderContainer>
    </>
  );
};

export default Header;



