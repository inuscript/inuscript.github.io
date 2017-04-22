import React from "react"
import scratch from "./scratch.jpg"
import styled from "styled-components"

const Title = styled.h1`
  color: #d62246;
  font-size: 28px;
`

const Img = styled.img`
  width : ${ ({size}) => size }px;
  height : ${({size}) => size}px;
  borderRadius : ${({size}) => size}px;
`

export const Scratch = ({size}) => <Img
  src={scratch}
  size={size}
/>

export const Visual = () => (
  <div>
    <Title>inuscript.github.io</Title>
    <Scratch size={300}/>
  </div>
)