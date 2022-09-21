type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false

type EndsWith<O extends string, T extends string> = O extends `${infer S}${T}`
  ? true
  : false;

export {};
