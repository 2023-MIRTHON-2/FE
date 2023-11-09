import React from "react";

export default function FormInput({ id, type, label, value, onChange }) {
  return (
    <div className="flex justify-between items-center mb-5">
      <label for={id} className="text-my-green font-bold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-[75%] border-[1px] border-black rounded-md px-6 py-2 outline-none"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
