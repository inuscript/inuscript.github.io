import React, { Component } from "react";
import load from "./loader";
import styled from "styled-components";

const FeedItem = styled.a`
  width: 100%;
  display: block;
  padding: 1em 0;
`;

const Mark = styled.span`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 0.2em;
  border-radius: 4px;
  width: 4em;
  background: ${props => props.bgColor};
  color: ${props => props.color || "#fff"};
  margin: 0 0.5em;
`;

const Title = styled.a`
  color: #333;
  font-weight: bold;
`;
const Time = styled.div`
  padding-left: 0.5em;
`;
const Feed = ({ title, link, date, media, bgColor, color }) => {
  return (
    <FeedItem>
      <div>
        <Mark bgColor={bgColor} color={color}>
          {media}
        </Mark>
        <Title href={link}>{title}</Title>
      </div>
      <div>
        <Time>{date.toString()}</Time>
      </div>
    </FeedItem>
  );
};

export default class Feeds extends Component {
  state = {
    feeds: []
  };
  componentDidMount() {
    load().subscribe(feeds => {
      this.setState({
        feeds
      });
    });
  }
  render() {
    console.log(this.state.feeds);
    // return null;
    return this.state.feeds.map((item, i) => <Feed key={i} {...item} />);
  }
}
