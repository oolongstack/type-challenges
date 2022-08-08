type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// implements First
type First<T extends any[]> = T extends any[] ? T[0] : never;

type First1<T extends unknown[]> = Extract<T[number], T[0]>;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First1<arr2>; // expected to be 3
export {};
