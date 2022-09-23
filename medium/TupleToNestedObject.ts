type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

// type TupleToNestedObject<
//   T extends any[],
//   N,
//   I extends any[] = []
// > = T["length"] extends 0
//   ? N
//   : T extends [infer A, ...infer Rest]
//   ? T["length"] extends [...I, A]["length"]
//     ? {
//         A: TupleToNestedObject<Rest, N, [...I, A]>;
//       }
//     : N
//   : N;

type TupleToNestedObject<T, U, R = U> = T extends []
  ? R
  : T extends [...infer Beginning, infer Last]
  ? TupleToNestedObject<Beginning, U, { [K in Last & string]: R }>
  : never;
export {};
