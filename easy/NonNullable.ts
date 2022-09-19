type NonNullable<T> = T extends null | undefined ? never : T;

type X = NonNullable<string | number | null>;

export {};
