const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

//implementation
type TupleToObject<T extends readonly any[]> = {
  // number 是索引名称 0, 1, 2, 3
  [K in T[number]]: K;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const res: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};

export {};
