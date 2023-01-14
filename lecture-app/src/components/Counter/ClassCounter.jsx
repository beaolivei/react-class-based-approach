import { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    //this.handleClick = this.handleClick.bind(this)
  };

  // using bind
//   handleClick() {
//     this.setState((prev) => {
//       return ({
//         count: prev.count + 1
//       });
//     })
//   };
  handleClick = () => {
    this.setState((prev) => {
      return ({
        count: prev.count + 1
      })
    })
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>The button has been clicked {this.state.count} times</h2>
        <button onClick={this.handleClick}>CLICK ME</button>
      </>
    );
  };
}