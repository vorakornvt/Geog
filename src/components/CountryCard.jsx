import React from "react";
import Link from "next/link";

function CountryCard({ name, flag, code }) {
  return (
    <div className="bg-black rounded-xl shadow-md p-4 text-center hover:-translate-y-1 transition-transform w-full max-w-[180px]">
      <Link href={`/${code}`}>
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="w-full h-24 object-cover rounded-md"
        />
        <h3 className="mt-3 text-white text-lg font-semibold">{name}</h3>
      </Link>
    </div>
  );
}

export default CountryCard;
