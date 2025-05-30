import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn text-md px-6 bg-[#35FFAE] hover:bg-[#35ffae83] h-12 rounded-3xl"
    >
      {children}
    </button>
  );
}

export default Button;
