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
import Parser from "rss-parser";

const parser = new Parser();

const parseRssItem = item => {
  const { title, link, pubDate } = item;
  return {
    title,
    link,
    date: new Date(pubDate)
  };
};

const fromRss = (url, mediaType) =>
  from(parser.parseURL(url)).pipe(
    mergeMap(r => from(r.items)),
    map(parseRssItem),
    map(item => ({ ...item, mediaType })),
    catchError(err => {
      return of([]);
    })
  );

const fromQiita = () =>
  fromRss("https://qiita.com/terrierscript/feed.atom", "Qiita");
const fromDevto = () => fromRss("https://dev.to/feed/terrierscript", "dev.to");

const fromMedium = () =>
  fromRss("https://medium.com/feed/@inuscript", "Medium");

export default () => {
  return merge(fromQiita(), fromDevto(), fromMedium()).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      return [...acc, ...v].sort((a, b) => a.date > b.date);
    })
  );
};
