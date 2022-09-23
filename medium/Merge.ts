type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

type PropertyKey = string | number | symbol;
type Merge<
  O extends Record<PropertyKey, any>,
  T extends Record<PropertyKey, any>
> = {
  [P in keyof O | keyof T]: P extends keyof T ? T[P] : O[P];
};

export {};
