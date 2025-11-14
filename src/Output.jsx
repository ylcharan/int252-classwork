import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);

    console.log("Inside the constructor (with super(props)):", this.props);
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default Output;
