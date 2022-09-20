type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? `${U}`
  : `${T}`;

type X = Absolute<20>; // "20"
type Y = Absolute<-20>; // "20"

export {};
