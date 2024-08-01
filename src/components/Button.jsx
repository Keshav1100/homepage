import React from "react";

function Button({ btn, classname = "", border = false }) {
  return (
    <button
      className={`font-medium ${
        border ? "border-2 border-[#9980FF] text-[#211D6D]" : ""
      } rounded-md px-4 py-2 ${
        !border ? "bg-[#9980FF] text-white" : ""
      } ${classname}`}
    >
      {btn}
    </button>
  );
}

export default Button;
