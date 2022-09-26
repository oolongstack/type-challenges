type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type TupleToUnion<T extends any[], R = never> = T extends [
  infer A,
  ...infer Rest
]
  ? TupleToUnion<Rest, A | R>
  : R;
export {};
