import Image from 'next/legacy/image'
import React from 'react'
import Img from "@/assets/form.jpg"
import { ImgContainer } from './css/ImgForm'
import Redes from '../Redes/Redes'
const ImgForm = () => {
  return (
    <ImgContainer>
      <Image
      className='image'
      src={Img}
      alt='img'
      width={623}
      height={399}
      objectFit='cover'  
      />
      <div className='absolRedes'>
        <Redes/>
      </div>
    </ImgContainer>
  )
}

export default ImgForm
