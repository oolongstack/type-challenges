type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

// type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

// type Without<
//   T extends any[],
//   K extends any[] | number,
//   R extends any[] = []
// > = T extends [infer A, ...infer Rest]
//   ? K extends number
//     ? Equal<K, A> extends true
//       ? Without<Rest, K, R>
//       : Without<Rest, K, [...R, A]>
//     : K extends [infer B, ...infer Rest1]
//     ? Equal<A, B> extends true
//       ? Without<Rest, Rest1, R>
//       : Without<Rest, Rest1, [...R, B]>
//     : R
//   : R;

type GetUnion<T extends number[] | number> = T extends number[] ? T[number] : T;

type Without<T extends number[], U extends number[] | number> = T extends [
  infer First,
  ...infer Rest extends number[]
]
  ? First extends GetUnion<U>
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : T;

export {};
