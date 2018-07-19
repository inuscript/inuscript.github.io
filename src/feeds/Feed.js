import React, { Component } from "react"
import load from "./loader"
import styled from "styled-components"

const FeedItem = styled.div`
  width: 100%;
  display: block;
  padding: 1em 0;
`

const Mark = styled.div`
  display: inline-block;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding: 0.2em 0.6em;
  border-radius: 4px;
  width: 4em;
  background-color: ${
    ({backgroundColor}) => backgroundColor
  };
  color: ${props => props.color || "#fff"};
  margin: 0 0.5em;
  text-decoration: none;
`

const Title = styled.span`
  font-weight: bold;
  font-size: 1.4em;
`
const Time = styled.div`
  padding-left: 0.5em;
`
const Link = styled.a`
  display: block;
  color: #333;
  :visited: {
    color: #333:
  }
`
const Feed = ({ title, link, date, media, bgColor, color }) => {
  return (
    <FeedItem>
      <Link href={link}>
        <Mark backgroundColor={bgColor} color={color}>
          {media}
        </Mark>
        <Title>{title}</Title>
      </Link>
      <div>
        <Time>{date.toLocaleString()}</Time>
      </div>
    </FeedItem>
  )
}

export default class Feeds extends Component {
  constructor(props){
    super(props)
    this.state = {
      feeds: []
    }
  }
  componentDidMount() {
    load().subscribe(feeds => {
      this.setState(prev => ({
        feeds
      }))
    })
  }
  render() {
    // console.log(this.state.feeds);
    // return null;
    return this.state.feeds.map((item, i) => <Feed key={i} {...item} />)
  }
}
