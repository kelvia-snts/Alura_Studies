import React from "react";
import ButtonStyle from "./Button.module.scss";

class Button extends React.Component<{
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={ButtonStyle.button}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
