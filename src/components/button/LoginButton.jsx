import React from "react";

const LoginButton = ({
  content,
  color,
  type = "button",
  onClickEvent,
  size,
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-md p-4 font-semibold min-w-[12rem] ${
        color === "red" ? "text-my-red" : "text-my-green"
      } 
      ${size}
      `}
      style={{ boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25)" }}
      onClick={onClickEvent}
      type={type}
    >
      {content}
    </button>
  );
};

export default LoginButton;
