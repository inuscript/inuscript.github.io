import React, { Component } from 'react'
import { Visual } from "./Visual"
import { Avater } from "./Avater"
import { Links } from "./Links"
import styled from "styled-components"

const Body = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: hsl(34, 31%, 60%);
  display: flex;
  justify-content: center;
 
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border-radius: 80px;
  flex-wrap: wrap;
  background-color: hsl(34, 41%, 70%);
`

const Row1 = styled.div`
  flex-basis: 60%;
`
const Row2 = styled.div`
  padding-top:2em;
  flex-basis: 60%;
`

class App extends Component {
  render() {
    return (
      <Body>
        <Container>
          <Row1>
            <Visual />
          </Row1>
          <Row2>
            <Links />
          </Row2>
        </Container>
      </Body>
    );
  }
}

export default App;
