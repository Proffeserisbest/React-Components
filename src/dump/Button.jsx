import React from "react";
// import styles from "../style/dumpStyle/Button.module.scss";

const Button = ({
  text,
  onClick,
  type,
  icon,
  classes,
  varient,
}) => {

  return (
    <button
      className={`${classes} ${varient}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;