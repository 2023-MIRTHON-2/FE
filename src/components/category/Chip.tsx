import React from "react";

interface props {
  color: "red" | "green";
  chipInfo: string;
  isPicked: boolean;
  onClickEvent: (chipInfo: string) => void;
}

const Chip = ({ color, chipInfo, isPicked, onClickEvent }: props) => {
  return (
    <div
      className={`flex justify-center items-center p-2 min-w-[5.875rem] rounded-xl border border-solid cursor-pointer font-semibold ${
        color === "red"
          ? "border-my-red text-my-red"
          : "border-my-green text-my-green"
      } ${
        color === "red"
          ? isPicked
            ? "bg-my-light-red"
            : "bg-white"
          : isPicked
          ? "bg-my-light-green"
          : "bg-white"
      }`}
      onClick={() => onClickEvent(chipInfo)}
    >
      {chipInfo}
    </div>
  );
};

export default Chip;
