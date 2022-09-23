// implemention of Includes

type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

// 推测的使用 第一次 A 推测为Kars，B推测为数组中其他的值组成的数组，第二次 A 推测为 Esidisi ...
type Includes<T extends any[], U> = T extends [infer A, ...infer Rest]
  ? Equal<A, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Wamuu">; // expected to be `false`

export {};
