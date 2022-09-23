type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]

type Fill<T, N, R extends any[] = []> = T extends [infer A, ...infer Rest]
  ? Fill<Rest, N, [...R, N]>
  : R;

export {};
