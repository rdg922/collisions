export default class {
  constructor(p, initialVel1) {
    this.p = p;
    this.vel = initialVel1;
    this.x = p.width / 2;
    this.y = p.height /2;
  }

  draw() {
    const {p} = this
    p.rect(this.x, this.y, 200, 200);
    this.x += this.vel
  }
}
