type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

type AppendToObject<T, K extends keyof any, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
export {};
