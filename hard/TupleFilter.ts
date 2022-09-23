type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]
// your answers
type FilterOut<T extends any[], F, U extends any[] = []> = T extends [
  infer K,
  ...infer R
]
  ? [K] extends [F]
    ? FilterOut<R, F, [...U]>
    : FilterOut<R, F, [...U, K]>
  : U;

export {};
