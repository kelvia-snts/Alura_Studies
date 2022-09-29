import React from "react";
import ButtonStyle from "./Button.module.scss";

class Button extends React.Component<any> {
  render() {
    return (
      <button className={ButtonStyle.button}>{this.props.children}</button>
    );
  }
}

export default Button;
