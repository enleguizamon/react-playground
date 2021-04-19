import React from "react";

class Task extends React.Component {
  render() {
    const { name } = this.props;
    return <li>{name}</li>;
  }
}

export default Task;
