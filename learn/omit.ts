type SetDifference<A, B> = A extends B ? never : A;

type A = number | string;
type B = string | boolean;

type AB = SetDifference<A, B>;

type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>;
type Props = {
  name: string;
  age: number;
  visible: boolean;
};

type R = Omit<Props, "age">;
type Omit1<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type R1 = Omit1<Props, "age">;

namespace x {
  type Props = {
    name: string;
    age: number;
    visible: boolean;
  };
  type DefaultProps = {
    age: number;
  };
  type Diff<T extends object, P extends object> = Pick<
    T,
    SetDifference<keyof T, keyof P>
  >;
  type DiffProps = Diff<Props, DefaultProps>;
}
export {};
