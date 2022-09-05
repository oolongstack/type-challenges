type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type MyDeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Object ? MyDeepReadonly<T[K]> : T[K];
};

type Y = MyDeepReadonly<X>;

const obj: Y = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};

export {};
