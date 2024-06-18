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
    this.state = {
      ...defaultSettings,
      collisionCount: 0,
    };
  }

  Sketch = (p) =>
    Sketch(p, {
      initialVel: this.state.initialVel,
      mass: this.state.mass,
      updateCollisionCount: this.updateCollisionCount,
    });

  componentDidMount() {
    this.startSketch();
  }

  componentWillUnmount() {
    this.stopSketch();
  }

  startSketch() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  stopSketch() {
    if (this.myP5) this.myP5.remove();
  }

  changeMass = (e) => {
    e.preventDefault();
    this.setState({ mass: e.target.value });
  };

  changeVelocity = (e) => {
    e.preventDefault();
    this.setState({ initialVel: e.target.value });
  };

  resetSimulation = () => {
    this.setState({ ...defaultSettings, collisionCount: 0 }, () => {
      this.stopSketch();
      this.startSketch();
    });
  };

  updateCollisionCount = (count) => {
    this.setState({ collisionCount: count });
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
              min="10"
              max="100"
              defaultValue={defaultSettings.mass}
              onChange={this.changeMass}
            />
          </div>
          <div className="group">
            <div>Velocity:</div>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue={defaultSettings.initialVel}
              onChange={this.changeVelocity}
            />
          </div>
          <button onClick={this.resetSimulation}>Reset</button>
        </div>
        <div className="counter">
          <div>Collision Count: {this.state.collisionCount}</div>
        </div>
      </div>
    );
  }
}

export default App;
