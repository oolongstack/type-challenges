type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// implemention

type MyExclude<T, U> = T extends U ? never : T;

const result: Result = "b";
export {};
