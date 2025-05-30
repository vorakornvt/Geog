import React from "react";
import Image from "next/image";
import RegionSearchPage from "@/components/RegionSearchPage";
function region() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full md:w-2/2 flex flex-col justify-center text-center space-y-6 px-4">
        {" "}
        <Image
          src="/assets/RG.png"
          alt="countiestext"
          height={150}
          width={200}
          className=" mx-auto"
        />
        <RegionSearchPage />
      </div>
    </main>
  );
}

export default region;
