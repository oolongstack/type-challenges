type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type StringToUnion<S extends string> = S extends `${infer A}${infer B}`
  ? A | StringToUnion<B>
  : never;
export {};
