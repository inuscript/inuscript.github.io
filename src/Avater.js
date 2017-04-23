import React, { Component } from 'react'
import avater from "./avater.png"
import styled from "styled-components"
import { SizeImg, RadiusImg } from "./RadiusImg"

const Img = styled(RadiusImg)`
  border: 2px solid #333;
  background: white;
`
const Center = styled.div`
  text-align: center;
`
export const Avater = () => (
  <Center>
    <Img src={avater} size={48} />
  </Center>
)