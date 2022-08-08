// implemention of If

// C 是boolean类型，如果C是true，那么执行T，否则执行F
type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

export {};
