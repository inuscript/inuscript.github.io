import React from "react"
import styled from "styled-components"
import { Scratch } from "./Scratch"

const Title = styled.h1`
  color: #d62246;
  font-size: 28px;
`

const Link = styled.a`
  text-decoration: none;
`

export const Visual = () => (
  <div>
    <Link href="/">
      <Title>inuscript.github.io</Title>
    </Link>
    <Scratch size={300}/>
  </div>
)