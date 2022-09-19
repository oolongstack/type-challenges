interface Props {
  name: string;
  age: number;
  gender: "male" | "female";
}

type PickReadonly<T, K extends keyof T> = {
  readonly [Key in K]: T[K];
} & {
  [Key in Exclude<keyof T, K>]: T[Key];
};

type X = PickReadonly<Props, "age" | "name">;

export {};
