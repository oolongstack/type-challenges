type ExampleType = Promise<string>;

// implementation
type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type Result = MyAwaited<ExampleType>; // string

export {};
