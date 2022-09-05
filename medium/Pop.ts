type arr1 = [1, 2, 3, 4];

type Pop<T extends any[]> = T extends [...infer A, infer L] ? A : never;

type Poped = Pop<arr1>;

export {};
