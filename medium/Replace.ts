type replaced = Replace<"types are fun!", "fun", "awesome">; // 期望是 'types are awesome!'

type Replace<
  S extends string,
  F extends string,
  T extends string
> = F extends ""
  ? S
  : S extends `${infer X}${F}${infer Y}`
  ? `${X}${T}${Y}`
  : S;
export {};
