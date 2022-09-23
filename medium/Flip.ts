type A = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type B = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type C = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}

type Flip<T extends Record<PropertyKey, any>> = {
  [P in keyof T as `${T[P]}`]: P;
};

export {};
