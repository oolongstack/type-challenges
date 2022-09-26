type st = ReverseString<"abcd">;

type ReverseString<
  S extends string,
  R extends string = ``
> = S extends `${infer A}${infer Rest}` ? `${ReverseString<Rest, R>}${A}` : R;
export {};
