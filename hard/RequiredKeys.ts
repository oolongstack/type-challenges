// 拿到required的属性
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”

type RequiredKeys<T> = keyof {
  [P in keyof T as Omit<T, P> extends T ? never : P]: T[P];
};

type X = { foo: number } extends { foo: number; bar?: string } ? true : false;
type Y = { bar?: string } extends { foo: number; bar?: string } ? true : false;

export {};
