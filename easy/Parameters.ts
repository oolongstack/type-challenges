const foo = (arg1: string, arg2: number): void => {};

// implementions

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
export {};
