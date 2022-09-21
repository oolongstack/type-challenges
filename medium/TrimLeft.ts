type trimed = TrimLeft<"  Hello World  ">; // 应推导出 'Hello World  '

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

type TrimRight<S extends string> = S extends `${infer Rest}${" " | "\n" | "\t"}`
  ? TrimRight<Rest>
  : S;

type trimed1 = TrimRight<"  Hello World  ">;
export {};
