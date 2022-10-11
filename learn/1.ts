type State<T extends number | string> = {};

type X = State<number>;

type Y = {
  [key: string]: string;
};

const obj: Y = {
  name: "ddd",
  age: "ghghgh",
};

export {};
