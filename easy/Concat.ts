// implemention of Concat

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]

type Result1 = Concat<["a"], [true]>; // expected to be ["a", true]
export {};
