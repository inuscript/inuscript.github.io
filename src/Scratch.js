import React from "react"
import scratch from "./scratch.jpg"
import { Img } from "glamorous"

export const Scratch = ({size}) => (
  <Img 
    src={scratch}
    width={size}
    height={size}
    borderRadius={size}
  />
)