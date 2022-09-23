type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

type IndexOf<T extends any[], U, I extends any[] = []> = T extends [
  infer X,
  ...infer Rest
]
  ? Equal<X, U> extends true
    ? I["length"]
    : IndexOf<Rest, U, [...I, X]>
  : -1;

export {};
