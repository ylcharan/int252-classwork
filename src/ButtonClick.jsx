import React from "react";

class ButtonClick extends React.Component {
  handleOnClick = () => {
    alert("Button was clicked");
  };

  render() {
    return <button onClick={this.handleOnClick}>Click me</button>;
  }
}

export default ButtonClick;
