import { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
  }
  increment(){
    this.setState((prev) => {
        return {
          count: prev.count + 1,
        };
      })
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <button
          onClick={this.increment}>
          CLICK ME
        </button>
        <h2> This button has been clicked: </h2>
        <h2> {this.state.count} times</h2>
      </div>
    );
  }
}
