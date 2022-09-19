interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

type PartialByKeys<T, K extends keyof T> = {
  [Key in K]+?: T[Key];
} & {
  [Key in Exclude<keyof T, K>]: T[Key];
};

const obj: UserPartialName = {
  age: 20,
  address: "hhh",
  name: "mmm",
};
export {};
