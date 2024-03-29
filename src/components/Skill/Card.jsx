import React from 'react'
import { CardContainer,LeftTextIcon } from './css/Card'
import { AiFillCheckSquare } from 'react-icons/ai';

const Card = ({icon,title,color,info}) => {
  return (
    <CardContainer>
      <LeftTextIcon color={color} >
        <span>{icon}</span>
        <span className='text-span'>
        <h5>{title}</h5>
        <p>{info ? info : "Reactive Web Components"} </p>
        </span>
      </LeftTextIcon>
      <span className='ico'><AiFillCheckSquare/></span>
    </CardContainer>
  )
}

export default Card
