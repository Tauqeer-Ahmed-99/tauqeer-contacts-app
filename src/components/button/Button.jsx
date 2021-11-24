import React from "react";

const Button = ({ children, handleTheme, h, w }) => {
  const defaultClasses =
    " m-3 border rounded-md bg-secondary text-primary font-medium grid place-items-center self-center ";
  const classes = h || w ? defaultClasses + h + " " + w : defaultClasses;

  return (
    <button className={classes} onClick={handleTheme}>
      {children}
    </button>
  );
};

export default Button;
