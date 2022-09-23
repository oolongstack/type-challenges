type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

type Reverse<T extends any[], R extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Reverse<Rest, [First, ...R]>
  : R;

export {};
