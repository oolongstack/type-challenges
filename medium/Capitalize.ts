type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

type Capitalize<S extends string> = S extends `${infer C}${infer T}`
  ? `${Uppercase<C>}${T}`
  : S;

export {};
