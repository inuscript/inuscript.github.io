import React from "react"
import scratch from "./scratch.jpg"
import styled, { keyframes } from "styled-components"
import { RadiusImg } from "./RadiusImg"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled(RadiusImg)`
  animation: ${rotate360} 8s linear infinite;
`

const Scr = ({size}) => <Img
  src={scratch}
  size={size}
/>

export class Scratch extends React.Component {
  render(){
    return <Scr {...this.props} 
    />
  }
}
