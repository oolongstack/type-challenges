type A = 10;

type B = 10;

type Equla<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type T = Equla<A, B>;

export {};
