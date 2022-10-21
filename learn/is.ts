interface Bird {
  fly: number;
}
interface Dog {
  run: number;
}
declare function isBird(y: Bird | Dog): y is Bird;

const bird = isBird({ fly: 20 });

// const age = NaN;
export {};
