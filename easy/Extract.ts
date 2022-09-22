type Extract<T, U> = T extends U ? T : never;

type X = Extract<"a" | "b" | "c", "a" | "f">;

export {};
