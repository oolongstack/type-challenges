interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// implement MyPick
// 可以看做 K是 'title' | 'completed'
// P 是 K 的键值（in 操作符会将右边的表达式进行循环） P 第一次是 ’title’，第二次是 ’completed’
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]; // title: (title | completed)[title] : string
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export {};
