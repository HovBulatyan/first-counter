import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  plus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1> {this.state.count}</h1>
        <button onClick={this.plus} className="plus ">
          +
        </button>
        <h2>Please push button</h2>

        <button onClick={this.minus} className="minus ">
          -
        </button>
      </div>
    );
  }
}
