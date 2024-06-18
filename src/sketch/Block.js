export default class Block {
  constructor(p, x, y, s, v, m) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.s = s;
    this.v = v;
    this.m = m;
  }

  show() {
    const { p } = this;
    p.rect(this.x, this.y, this.s, this.s);
  }

  update() {
    this.x += this.v;
  }

  isColliding(block) {
    return !(this.x > block.x + block.s || this.x + this.s < block.x);
  }

  collide(block) {
    return (
      ((this.m - block.m) * this.v) / (this.m + block.m) +
      (2 * block.m * block.v) / (this.m + block.m)
    );
  }

  setVel(newV) {
    this.v = newV;
  }
}
