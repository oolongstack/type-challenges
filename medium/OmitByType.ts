type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }

type OmitByType<T, O> = {
  [P in keyof T as T[P] extends O ? never : P]: T[P];
};
export {};
