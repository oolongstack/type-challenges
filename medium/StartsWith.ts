type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<
  O extends string,
  T extends string
> = O extends `${T}${infer Rest}` ? true : false;

export {};
