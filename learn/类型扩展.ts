declare global {
  interface Number {
    add(num: number): number;
    minus(): number;
    power(): number;
  }
}

Number.prototype.add = function (num: number) {
  return this + num;
};

interface Person {
  name: string;
}

const p = {
  name: "cjl",
};

type A = typeof p;
export {};
