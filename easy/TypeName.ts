type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends "boolean"
  ? boolean
  : T extends undefined
  ? "undefined"
  : T extends null
  ? "null"
  : T extends Function
  ? "function"
  : T extends Array<any>
  ? "array"
  : "object";

type GetType = TypeName<Object>;

export {};
