import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter1: 0
    };
  }
  increaseCounter = () => {
    this.setState((prevState) => {
      if (prevState.counter === 10)
        return {
          counter1: prevState.counter1 + 1
        };
      else
        return {
          counter: prevState.counter + 1,
          counter1: prevState.counter1 + 1
        };
    });
  };
  handleSubmit = () => {
    console.log(this.state);
    this.increaseCounter();
    // increaseCounter1();
  };

  render() {
    return (
      <div className="App">
        <h1>
          {" "}
          Counter: <span id="counter">{this.state.counter}</span>
        </h1>
        <h1>
          {" "}
          Counter1: <span id="counter1">{this.state.counter1}</span>{" "}
        </h1>
        <button
          type="submit"
          style={{ cursor: "pointer" }}
          onClick={this.handleSubmit}
        >
          Play
        </button>
      </div>
    );
  }
}

export default App;
