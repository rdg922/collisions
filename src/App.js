import React from "react";
import p5 from "p5";
import Sketch from "./sketch/Sketch";

const defaultSettings = {
  mass: 100,
  initialVel: 1,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => Sketch(p, this.state || defaultSettings);

  componentDidMount() {
    this.startSketch();
  }

  componentWillUnmount() {
    this.stopSketch();
  }

  componentWillUpdate() {
    this.stopSketch();
  }

  startSketch() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  stopSketch() {
    this.myP5.remove();
  }

  changeMass = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, mass: e.target.value }, this.startSketch);
  };

  changeVelocity = (e) => {
    e.preventDefault();
    this.setState(
      { ...this.state, initialVel: e.target.value },
      this.startSketch
    );
  };

  render() {
    return (
      <div className="App">
        <div ref={this.myRef} />

        <div className="form">
          <div className="group">
            <div>Mass:</div>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="10"
              max="100"
              defaultValue={defaultSettings.mass}
              onChange={this.changeMass}
            />
          </div>
          <div className="group">
            <div>Velocity</div>
            <input
              type="number"
              id="tentacles"
              name="tentacles"
              min="10"
              max="100"
              defaultValue={defaultSettings.initialVel}
              onChange={this.changeVelocity}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
