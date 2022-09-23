type replaced = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'

type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = S extends `${F}${infer Rest}`
  ? ReplaceAll<`${T}${Rest}`, F, T>
  : S extends `${infer A}${infer Rest1}`
  ? `${A}${ReplaceAll<Rest1, F, T>}`
  : S;

export {};
