"use client";

import ButtonProps from "./types";

 const Button = ({ children, className, appName= 'app name' }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

export default Button