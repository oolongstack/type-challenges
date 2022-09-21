type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

type Trim<S extends string> = S extends
  | `${" " | "\n" | "\t"}${infer T}`
  | `${infer T}${" " | "\n" | "\t"}`
  ? Trim<T>
  : S;
export {};
