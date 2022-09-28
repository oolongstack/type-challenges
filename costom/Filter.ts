type Res = Filter<[1, 2, 3, 4, 5, "aaa", "444"], ["aaa", 1]>;

type TupleToUnion<T extends unknown[]> = T extends any[] ? T[number] : T;

type Filter<
  T extends unknown[],
  Y extends unknown[],
  R extends any[] = []
> = T extends [infer A, ...infer Rest]
  ? A extends TupleToUnion<Y>
    ? Filter<Rest, Y, [...R]>
    : Filter<Rest, Y, [...R, A]>
  : R;

export {};
