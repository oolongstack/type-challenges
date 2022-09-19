interface User {
  name?: string;
  age?: number;
  address?: string;
}
type RequiredByKeys<T, K extends keyof T> = {
  [Key in K]-?: T[Key];
} & {
  [Key in Exclude<keyof T, K>]+?: T[Key];
};
type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

const obj: UserRequiredName = {
  name: "cjl",
};
export {};
