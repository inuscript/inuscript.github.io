import React, { Component } from 'react'
import { Visual } from "./Visual"
import { Links } from "./Links"
import styled from "styled-components"

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #D1B692;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap:wrap;
`

const Center = styled.div`
  flex-basis: 30%;
`


class App extends Component {
  render() {
    return (
      <Body>
        <Container>
          <Center>
            <Visual />
          </Center>
          <Links />
        </Container>
      </Body>
    );
  }
}

export default App;
