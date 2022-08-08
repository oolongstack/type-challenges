const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
// implementions

type MyReturnType<T extends (v: boolean) => any> = T extends (
  v: boolean
) => infer R
  ? R
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
export {};
