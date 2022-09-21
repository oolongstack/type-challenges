type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

type AnyOf<T extends any[]> = T extends (
  | 0
  | ""
  | false
  | []
  | Record<string, never>
)[]
  ? false
  : true;

export {};
