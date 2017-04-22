import React from "react"
import scratch from "./scratch.jpg"
import styled, { keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  width : ${ ({size}) => size }px;
  height : ${({size}) => size}px;
  borderRadius : ${({size}) => size}px;
  animation: ${rotate360} 8s linear infinite;
`

export const Scratch = ({size}) => <Img
  src={scratch}
  size={size}
/>
