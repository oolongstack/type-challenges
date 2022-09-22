type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<
  S extends string,
  E extends string
> = S extends `${infer First}${infer Rest}`
  ? First extends E
    ? DropChar<Rest, E>
    : `${First}${DropChar<Rest, E>}`
  : S;

export {};
