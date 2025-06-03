import React from "react";

function ButtonSimple({ children, onClick, ariaLabel, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel || undefined}
      className="btn text-md px-6 bg-[#dbdbdb] hover:bg-[#9d9d9d83] h-12 rounded-3xl"
    >
      {children}
    </button>
  );
}

export default ButtonSimple;
