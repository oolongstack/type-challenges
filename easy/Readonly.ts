interface Todo {
  title: string;
  description: string;
}
// implement MyReadonly
type MyReadonly<T> = {
  readonly // 循环  => K 第一次是 ’title’，第二次是 ’description’ => readonly title: string, readonly description: string
  [K in keyof T]: T[K];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

export {};
