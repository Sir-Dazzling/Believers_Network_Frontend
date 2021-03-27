import { ClassNamesContent } from "@emotion/react";
import React from "react";
import styles from "./button.module.css";

interface Props
{
  type: "outlined" | "white" | "red" | "blue";
  className?: string;
  isLoading?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  [key: string]: any;
}

export const Button: React.FC<Props> = ({
  type,
  children,
  className,
  isLoading = false,
  ...others
}) =>
{
  let buttonStyle = "";
  const whiteButton =
    "bg-white border-white ripple-bg-green-light hover:text-white text-green-normal";
  const redButton =
    "ripple-bg-red-500 bg-red-500 text-white";
  const outlinedButton =
    "bg-transparent border-green text-green hover:bg-green hover:text-white";
  const bluebutton = "ripple-bg-blue text-white bg-blue";
  if (type === "white")
  {
    buttonStyle = whiteButton;
  } else if (type === "red")
  {
    buttonStyle = redButton;
  } else if (type === "blue")
  {
    buttonStyle = bluebutton;
  } else
  {
    buttonStyle = outlinedButton;
  }

  return (
    <button
      disabled={isLoading || others?.disabled}
      className={`disabled:opacity-80  disabled:cursor-not-allowed relative px-8 ${isLoading ? "py-2 lg:py-2 flex justify-center items-center" : "py-4"
        }  border-2 focus:outline-none outline-none rounded-md ${buttonStyle} ${className}`}
      {...others}
    >
      {isLoading ? (
        <div
          className={`${styles.spinner}  animate-spin spinner inline-block text-center rounded-full`}
        ></div>
      ) : (
        children
      )}
    </button>
  );
};
