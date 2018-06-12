import React from "react";
// @ts-ignore
import scratch from "./scratch.jpg";
import styled, { keyframes } from "styled-components";
import { RadiusImg } from "../component/RadiusImg";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/** @type { * } */
const Img = styled(RadiusImg)`
  animation: ${rotate360} 8s linear infinite;
`;


/** @type { * } */
const Scr = ({ size }) => <Img src={scratch} size={size} />;

export class Scratch extends React.Component {
  render() {
    return <Scr {...this.props} />;
  }
}
