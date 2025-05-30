import React from "react";

function ButtonSimple({ children }) {
  return (
    <button className="btn text-md px-6 bg-[#dbdbdb] hover:bg-[#9d9d9d83] h-12 rounded-3xl">
      {children}
    </button>
  );
}

export default ButtonSimple;
