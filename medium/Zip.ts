type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]

type Zip<F extends any[], S extends any[], R extends any[] = []> = [
  F,
  S
] extends [[infer A, ...infer ARest], [infer B, ...infer BRest]]
  ? Zip<ARest, BRest, [...R, [A, B]]>
  : R;

export {};
