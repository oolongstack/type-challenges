// 将所有值变为可选

type Example = {
  name: "cjl";
  age: 22;
  gender: "male";
  friend: {
    name: "mf";
    age: 22;
    gender: "female";
  };
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
type X = Partial<Example>;
type Y = DeepPartial<Example>;

// 测试
const obj1: X = {
  name: "cjl",
  friend: {
    name: "mf",
    age: 22,
    gender: "female",
  },
};

const obj2: Y = {
  age: 22,
  friend: {
    name: "mf",
  },
};
export {};
