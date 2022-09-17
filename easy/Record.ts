type H = {
  [x: string]: string;
};
type X = Record<"a" | "b", H>;

const o: X = {
  a: {
    key: "a",
  },
  b: {
    key: "b",
  },
};

type MyRecord<T extends keyof any, H> = {
  [P in T]: H;
};

type Y = MyRecord<"a" | "b", H>;

const o1: Y = {
  a: {
    key: "a",
  },
  b: {
    key: "b",
  },
};
export {};
