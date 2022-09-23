type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

// type X = tesla extends { length: 0 } ? 0 : tesla["length"];

// implementation

type Length<T extends readonly unknown[]> = T extends { length: 0 }
  ? 0
  : T["length"];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
export {};
