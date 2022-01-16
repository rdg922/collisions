import Sketch from "react-p5";


export default () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  }

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
  }

  return <Sketch setup={setup} draw={draw}/>
}
