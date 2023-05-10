import React from 'react'
import { AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn,FaInstagram,FaFacebook } from 'react-icons/fa';
import { RedSocial } from './css/Redes';

const Redes = () => {
  return (
    <RedSocial>
    <a target='_blank' href="https://github.com/zLuciel"><AiFillGithub/></a>
    <a target='_blank' href="https://www.linkedin.com/in/emmanuel-abregù-270175220/"><FaLinkedinIn/> </a>
    <a target='_blank' href="https://www.instagram.com/manu_abregu.s/"><FaInstagram/></a>
    <a target='_blank' href="https://www.facebook.com/emmanuel.abregu.92/"><FaFacebook/></a>
  </RedSocial>
  )
}

export default Redes
