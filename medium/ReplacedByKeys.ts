interface Todo {
  name: string;
  age: number;
  gender: "male" | "female";
}
type Equla<A, B> = A extends B ? (B extends A ? true : false) : false;
type replaced = ReplacedByKeys<Todo, "gender", "haha">;

type ReplacedByKeys<T, F extends string, I extends string> = {
  [P in keyof T as Equla<P, F> extends true ? I : P]: T[P];
};

export {};
