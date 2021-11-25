import React from "react";

const Button = ({ children, handleOnClick, conditionalClasses }) => {
  const defaultClasses =
    "m-3 border rounded-md bg-secondary text-primary font-medium grid place-items-center self-center ";
  const classes = conditionalClasses
    ? defaultClasses + conditionalClasses
    : defaultClasses;

  return (
    <button className={classes} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
