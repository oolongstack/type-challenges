type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }

//  只要类型为boolean的键值
type PickByType<T, O> = {
  [K in keyof T as T[K] extends O ? K : never]: T[K];
};
export {};
