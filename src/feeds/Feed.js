import React, { Component } from "react";
import load from "./loader";

const Feed = ({ title, link, date, mediaType }) => {
  return (
    <div>
      <div>
        <a href="link">{title}</a>
        <div>{date.toString()}</div>
        <div>{mediaType}</div>
      </div>
    </div>
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
    return;
    return this.state.feeds.map((item, i) => <Feed key={i} {...item} />);
  }
}
