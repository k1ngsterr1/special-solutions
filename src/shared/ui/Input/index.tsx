import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isError, ...props }, ref) => {
    const inputClassName = isError ? "input input--error" : "input";
    return <input className={inputClassName} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
