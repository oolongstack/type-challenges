type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// implemention

type MyExclude<T, U> = T extends U ? never : T;

// 原理
type R = MyExclude<"a", "a"> | MyExclude<"b", "a"> | MyExclude<"c", "a">;

const result: Result = "b";
export {};
