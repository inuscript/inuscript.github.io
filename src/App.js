import React, { Component } from 'react'
import { Scratch } from "./Scratch"
import glamorous from "glamorous"
import { injectGlobal } from 'styled-components'

injectGlobal`
body{
  padding:0;
  margin:0;
}
`
const Container = glamorous.div({
  display: "flex"
})

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
