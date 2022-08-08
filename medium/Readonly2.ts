interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// implemetions 批量readonly
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [key in K]: T[key];
// } & { [key in Exclude<keyof T, K>]: T[key] };

// 将K 拿出来变为readonly 交叉上 除了K以外的正常类型
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & { [key in Exclude<keyof T, K>]: T[key] };
const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
export {};
