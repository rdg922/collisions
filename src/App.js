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
    this.stopSketch();
    this.setState(
      (prevState) => ({
        ...prevState,
        collisionCount: 0,
      }),
      () => {
        this.startSketch();
      },
    );
  };

  updateCollisionCount = (count) => {
    this.setState({ collisionCount: count });
  };

  render() {
    return (
      <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div ref={this.myRef} className="mb-8" />

        <div className="form flex flex-col items-center space-y-4">
          <div className="group">
            <div>Mass:</div>
            <input
              type="number"
              min="10"
              max="100"
              value={this.state.mass}
              onChange={this.changeMass}
              className="bg-gray-800 text-white p-2 rounded"
            />
          </div>
          <div className="group">
            <div>Velocity:</div>
            <input
              type="number"
              min="1"
              max="100"
              value={this.state.initialVel}
              onChange={this.changeVelocity}
              className="bg-gray-800 text-white p-2 rounded"
            />
          </div>
          <button
            onClick={this.resetSimulation}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
        <div className="counter mt-8">
          <div>Collision Count: {this.state.collisionCount}</div>
        </div>
        <div className="acknowledgement bg-gray-800 text-white p-4 mt-8 rounded-lg max-w-md text-center">
          <p>
            This is a recreation of the phenomenon as mentioned by 3Blue1Brown.
            Watch the video{" "}
            <a
              href="https://www.youtube.com/watch?v=jsYwFizhncE"
              className="text-blue-400 underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default App;
