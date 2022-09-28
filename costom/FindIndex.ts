type Res = FindIndex<[1, 2, 4, 6, "999", 878], 4>; // 2
type Res1 = FindIndex<[1, 2, 4, 6, "999", 878], 100>; // -1

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

type FindIndex<T extends unknown[], R, P extends any[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? Equal<R, A> extends true
    ? P["length"]
    : FindIndex<Rest, R, [...P, A]>
  : -1;

export {};
