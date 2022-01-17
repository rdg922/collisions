import Block from './Block'

export default (p, {initialVel1, initiavlVel2, mass1}) =>{
  let block;

  p.setup = () => {
    p.rectMode(p.CENTER);
    p.createCanvas(p.windowWidth, p.windowHeight);
    block = new Block(p, initialVel1)
  }

  p.draw = () => {
    p.background(0);
    block.draw();
  }
}
