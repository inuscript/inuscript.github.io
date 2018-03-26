import { merge, from, create, of } from "rxjs";
import {
  map,
  mergeMap,
  mergeAll,
  scan,
  tap,
  reduce,
  catchError
} from "rxjs/operators";
import rssConfig from "./rssConfig";

// TODO: move rss-parser to another lib
// https://github.com/bobby-brennan/rss-parser/issues/53
// import Parser from "rss-parser";
// const parser = new Parser();
/* global RSSParser */
import "rss-parser/dist/rss-parser.min.js";
const parser = new RSSParser();

const parseRssItem = item => {
  const { title, link, pubDate } = item;
  return {
    title,
    link,
    date: new Date(pubDate)
  };
};
const fromRss = (url, config) =>
  from(parser.parseURL(url)).pipe(
    mergeMap(r => from(r.items)),
    map(parseRssItem),
    map(item => ({ ...item, ...config })),
    catchError(err => {
      return of([]);
    })
  );

const mock = {
  title: "Mock",
  url: "mock",
  date: new Date()
};

const createRssStream = rssConfig =>
  rssConfig.map(({ production, dev, ...config }) => {
    const url = process.env.NODE_ENV === "production" ? production : dev;
    if (url === null) {
      return from(Array(10).fill(mock)).pipe(
        map(item => ({ ...item, ...config }))
        // tap(c => console.log("tappp", c))
      );
    }
    return fromRss(url, config);
  });

export default () => {
  return merge(...createRssStream(rssConfig)).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      return [...acc, ...v].sort((a, b) => a.date.getTime() < b.date.getTime());
    })
  );
};
