import { merge, from, of } from "rxjs";
import {
  map,
  mergeMap,
  mergeAll,
  scan,
  tap,
  reduce,
  catchError
} from "rxjs/operators";

test("aa", done => {
  const str$ = merge(from([[2, 1, 5], [4, 1, 6]])).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      return [...acc, ...v].sort((a, b) => a < b ? -1 : 1);
    })
  );

  str$.subscribe(
    a => {
      console.log(a);
    },
    err => {
      console.error(err);
    },
    a => {
      done();
    }
  );
});
