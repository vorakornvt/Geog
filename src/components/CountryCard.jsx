// components/CountryCard/CountryCard.js
import React from "react";

function CountryCard({ name, flag }) {
  return (
    <div className="bg-black rounded-xl shadow-md p-4 text-center hover:-translate-y-1 transition-transform w-full max-w-[180px]">
      <img
        src={flag}
        alt={`Flag of ${name}`}
        className="w-full h-24 object-cover rounded-md"
      />
      <h3 className="mt-3 text-white text-lg font-semibold">{name}</h3>
    </div>
  );
}

export default CountryCard;
