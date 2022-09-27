type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

type Equla<A, B> = A extends B ? (B extends A ? true : false) : false;

type LastIndexOf<T extends any[], D extends unknown> = T extends [
  ...infer Rest,
  infer A
]
  ? Equla<D, A> extends true
    ? Rest["length"]
    : LastIndexOf<Rest, D>
  : -1;
export {};
