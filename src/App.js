import React, { Component } from "react";
import { Visual } from "./visual/Visual";
import { Avater } from "./avater/Avater";
import { Links } from "./links/Links";
import { Form } from "./form/Form";
import styled from "styled-components";
import Feed from "./feeds/Feed";

const Body = styled.div`
  width: 100vw;
  min-height: 700px;
  background-color: hsl(34, 31%, 60%);
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 10px;
  margin: 10px;
`;

const Left = styled(Container)`
  justify-content: center;
  width: 20%;
  border-radius: 80px;
  background-color: hsl(34, 41%, 70%);
  min-width: 400px;
  max-height: 640px;
`;

const Right = styled(Container)`
  width: 30%;
  padding: 10px 40px;
  overflow-y: scroll;
  min-width: 400px;
`;

const Row1 = styled.div`
  flex-basis: 60%;
`;
const Row2 = styled.div`
  padding-top: 2em;
  flex-basis: 60%;
`;

const Title = styled.h2`
  vertical-align: middle;
`;

class App extends Component {
  render() {
    return (
      <Body>
        <Left>
          <Row1>
            <Visual />
          </Row1>
          <Row2>
            <Links />
            {/* <Form /> */}
          </Row2>
        </Left>
        <Right>
          <Title>
            <Avater />
            <span>Recently Posted</span>
          </Title>
          <Feed />
        </Right>
      </Body>
    );
  }
}

export default App;
