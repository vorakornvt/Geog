import React from "react";

function Button({ children, onClick, ariaLabel, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={ariaLabel || undefined}
      className="btn text-md px-6 bg-[#35FFAE] hover:bg-[#35ffae83] h-12 rounded-3xl"
    >
      {children}
    </button>
  );
}

export default Button;
