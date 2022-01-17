import React from 'react'
import p5 from "p5"
import Sketch from "./sketch/Sketch"

const defaultSettings = {
  mass1: 100,
  initialVel1: 0,
  initiavlVel2: -1
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => Sketch(p, this.state || defaultSettings)

  componentDidMount() {
    this.startSketch()
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

  render() {
    return (
      <div className="App">
        <div ref={this.myRef}/>
          
        <button
          onClick={() => this.setState({initialVel1: Math.random() * 1 - .5}, this.startSketch)}
        >
          Change X
        </button>
      </div>
    );
  }
}

export default App;
