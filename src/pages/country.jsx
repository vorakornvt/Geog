import React from "react";
import CountrySearch from "@/components/CountrySearch";
import Image from "next/image";

function allcountries() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center space-y-6 px-4">
        {" "}
        <Image
          src="/assets/Cts.png"
          alt="countiestext"
          height={250}
          width={250}
          className="rounded-full mx-auto"
        />
        <CountrySearch />
      </div>
    </main>
  );
}

export default allcountries;
