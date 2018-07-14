import React from "react";
import avater from "./avater.png";
import styled from "styled-components";
import { RadiusImg } from "../component/RadiusImg";


const Img = styled(RadiusImg)`
  border: 0 solid #333;
  background: white;
  vertical-align: middle;
`;

const Center = styled.div`
  display: inline-block;
  margin-right: 0.2em;
`;

export const Avater = () => (
  <Center>
    <Img src={avater} size={48} />
  </Center>
);
