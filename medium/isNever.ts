type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
// never 被视为一个空的联合类型

type X = never extends never ? true : false;

type IsNever<T> = [T] extends [never] ? true : false;

export {};
