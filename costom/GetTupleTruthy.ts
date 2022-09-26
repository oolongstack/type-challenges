type Truthy = GetTupleTruthy<
  ["", 0, 1, false, true, 10, "jump", null, undefined, -0, {}]
>; // [1, true, 10, 'jump']

type F = "" | 0 | false | -0 | null | undefined;
type GetTupleTruthy<T extends any[], R extends any[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? A extends F
    ? GetTupleTruthy<Rest, R>
    : GetTupleTruthy<Rest, [A, ...R]>
  : R;
export {};
