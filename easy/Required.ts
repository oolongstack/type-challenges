type Props = {
  a?: "1";
  b?: "2";
  c?: {
    d?: "3";
  };
};

type Required<T> = {
  [P in keyof T]-?: T[P]; // 减去?
};
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

type X = Required<Props>;

type Y = DeepRequired<Props>;

const obj: X = {
  a: "1",
  b: "2",
  c: {
    d: "3",
  },
};

export {};
