import React from "react"
import styled from "styled-components"
import { Scratch } from "./Scratch"

const Center = styled.div`
  text-align: center;
`

const Title = styled.h1`
  color: #d62246;
  font-size: 28px;
`

const Link = styled.a`
  text-decoration: none;
`

export const Visual = () => (
  <Center>
    <Link href="/">
      <Title>@terrierscript</Title>
    </Link>
    <Scratch size={300}/>
  </Center>
)
