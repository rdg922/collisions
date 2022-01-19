import Block from './Block'

export default (p, {initialVel1, initiavlVel2, mass1}) =>{
  // TODO: read state from function parameters
  let bl1;
  let bl2;
  let v1;
  let v2;
  let count = 0;
  let digits = 7;
  let timeSteps = Math.pow(10, digits - 1) / 2;

  p.setup = () => {
    p.createCanvas(600, 200);
    bl1 = new Block(p, 50, 175, 25, 0, 1);
    bl2 = new Block(
      p,
      200,
      200 - 25 * digits,
      25 * digits,
      -0.75 / timeSteps,
      Math.pow(100, digits - 1)
    );
  }

  p.draw = () => {
    p.background(220);
    for (let i = 0; i < timeSteps; i++) {
      bl1.update();
      bl2.update();
      if (bl1.isColliding(bl2)) {
        v1 = bl1.collide(bl2);
        v2 = bl2.collide(bl1);
        bl1.setVel(v1);
        bl2.setVel(v2);
        //bl1.x=bl2.x-bl1.s;
        count++;
      }

      if (bl1.x < 0) {
        bl1.v *= -1;
        //bl1.x=0;
        count++;
      }
    }
    bl1.show();
    bl2.show();
    p.print(count);
  }
}
