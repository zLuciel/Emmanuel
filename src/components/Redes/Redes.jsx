import React from 'react'
import { AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { RedSocial } from './css/Redes';

const Redes = () => {
  return (
    <RedSocial>
    <a href=""><AiFillGithub/></a>
    <a href=""><FaLinkedinIn/> </a>
    <a href=""><FaInstagram/></a>
    <a href="">ds</a>
  </RedSocial>
  )
}

export default Redes
