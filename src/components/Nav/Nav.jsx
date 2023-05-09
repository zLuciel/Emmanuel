import React,{useEffect,useRef} from 'react'
import { NavContainer,ListNav } from './css/Nav'
import HeaderGsap from '../Header/gsap';


export const Nav = ({tipo,hambur}) => {

  const nav = useRef(null);
  const nav1 = useRef(null);
  const nav2 = useRef(null);
  const nav3 = useRef(null);
  const nav4 = useRef(null);
  useEffect(() => {
   HeaderGsap(nav,nav1,nav2,nav3,nav4)
  }, []);
  return (
    <NavContainer tipo={tipo}>
    <ListNav hambur={hambur}>
      <li ref={nav}>Home</li>
      <li ref={nav1}>Portafolio</li>
      <li ref={nav2}>About</li>
      <li ref={nav3}>Skill</li>
      <li ref={nav4}>Contact</li>
    </ListNav>
  </NavContainer>
  )
}
