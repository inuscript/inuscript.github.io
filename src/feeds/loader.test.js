import load from "./loader";
// import * as rxjs from "rxjs";
// console.log(Object.keys(rxjs));
// import * as rxjsOperators from "rxjs/operators";
// console.log(Object.keys(rxjsOperators));

test(
  "loader",
  done => {
    const stream$ = load();
    stream$.subscribe(
      x => {
        console.log("sub", x);
        done();
      },
      err => {
        console.error(err);
      }
    );
  },
  10000
);
