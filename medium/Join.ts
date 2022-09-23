type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
// your answers
type Join<T extends any[], U extends string | number> = T["length"] extends 1
  ? T[0]
  : T extends [infer L, ...infer R]
  ? L extends string
    ? `${L}${U}${Join<R, U> extends string ? Join<R, U> : never}`
    : never
  : never;

export {};
