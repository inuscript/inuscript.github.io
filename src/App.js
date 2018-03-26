import React, { Component } from "react";
import { Visual } from "./Visual";
import { Avater } from "./Avater";
import { Links } from "./Links";
import styled from "styled-components";
import Feed from "./feeds/Feed";

const Body = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: hsl(34, 31%, 60%);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 80px;
  flex-wrap: wrap;
  background-color: hsl(34, 41%, 70%);
`;
const Left = styled(Container)`
  justify-content: center;
  width: 30%;
`;
const Right = styled(Container)`
  width: 60%;

  padding: 40px;
  overflow-y: scroll;
`;

const Row1 = styled.div`
  flex-basis: 60%;
`;
const Row2 = styled.div`
  padding-top: 2em;
  flex-basis: 60%;
`;

class App extends Component {
  render() {
    return (
      <Body>
        <Left>
          <Row1>
            <Visual />
            {/*<Avater/>*/}
          </Row1>
          <Row2>
            <Links />
          </Row2>
        </Left>
        <Right>
          <h2>Recently Post</h2>
          <Feed />
        </Right>
      </Body>
    );
  }
}

export default App;
