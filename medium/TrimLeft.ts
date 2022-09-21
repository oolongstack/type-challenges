type trimed = TrimLeft<"  Hello World  ">; // 应推导出 'Hello World  '

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

export {};
