import React from "react";
import ButtonStyle from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={ButtonStyle.button}>
      {children}
    </button>
  );
}
