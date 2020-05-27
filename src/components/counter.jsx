import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  getTags() {
    //conditional rendering
    if (this.state.tags.length === 0) {
      return <p>no tags</p>;
    } else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getClass()}>{this.countFormat()}</span>
        <button onClick={this.handleIncrement} className="btn btn-dark">
          Increment
        </button>
        <div>{this.getTags()}</div>
      </React.Fragment>
    );
  }

  getClass() {
    let shape = "badge m-2 badge-"; //pattern to make color dynamically change according to the value of count
    shape += this.state.count === 0 ? "warning" : "primary";
    return shape;
  }

  countFormat() {
    let count = this.state.count;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
