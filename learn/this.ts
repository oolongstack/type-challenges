const obj: ThisType<{ name: "string" }> = {
  name: "cjl",
  say(this: { name: "string" }) {
    return this.name;
  },
};

class Rectangle {
  public x: number;
  public y: number;
  constructor(x, y) {}
  getArea(this: Rectangle, power: number): number {
    return this.x * this.y * power;
  }
}

const r1 = new Rectangle(10, 20);
r1.getArea(100);

export default {};
