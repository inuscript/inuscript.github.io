import React, { Component } from 'react'
import { Scratch } from "./Scratch"
import styles from "styled-components"

const Container = styles.div`
  display: flex
  width: 100%
`

class App extends Component {
  render() {
    return (
      <Container>
        <Scratch size={300}/>
      </Container>
    );
  }
}

export default App;
