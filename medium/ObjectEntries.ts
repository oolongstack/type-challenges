interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>;
// ['name', string] | ['age', number] | ['locations', string[] | null];

type NeverToUndefined<T> = [T] extends [never] ? undefined : T;

type ObjectEntries<T, S extends keyof T = keyof T> = S extends S
  ? [S, NeverToUndefined<Required<T>[S]>]
  : never;
export {};
