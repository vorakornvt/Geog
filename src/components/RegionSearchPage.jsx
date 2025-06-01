import { useState } from "react";
import CountryCard from "@/components/CountryCard";
import ButtonSimple from "@/components/ButtonSimple";
import Loader from "./Loader";
import MapRegion from "./MapRegion";
import Image from "next/image";

export default function RegionSearchPage() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchByRegion = async (region) => {
    setSelectedRegion(region);
    setCountries([]);
    setErrorMsg("");
    setLoading(true);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region.toLowerCase()}`
      );
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setErrorMsg("No countries found or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedRegion("");
    setCountries([]);
    setErrorMsg("");
  };

  return (
    <div className="p-6 max-w-7xl  mx-auto">
      <Image
        src="/assets/SCTN.png"
        alt="countiestext"
        height={250}
        width={250}
        className="rounded-full mb-10 mx-auto"
      />
      <div className="mx-auto w-[70%]">
        <MapRegion
          onRegionClick={(regionName) => fetchByRegion(regionName)}
          selectedRegion={selectedRegion}
        />
      </div>
      {/* Region MAP */}

      {/* Reset Button */}
      {selectedRegion && (
        <div className="flex justify-center mb-6">
          <ButtonSimple onClick={handleReset}>Reset</ButtonSimple>
        </div>
      )}

      {/* Error */}
      {errorMsg && <p className="text-center text-red-600 mb-4">{errorMsg}</p>}

      {loading ? (
        <Loader />
      ) : countries.length > 0 ? (
        <>
          {/* Chosen Region Display */}
          {selectedRegion && (
            <p className="text-md text-end text-[#35FFAE] mb-4">
              countries in: <span className="capitalize">{selectedRegion}</span>
            </p>
          )}

          {/* Total Count */}
          <p className="text-end text-sm  text-gray-200">
            Total Countries:
            <span className="text-[#35FFAE] mb-3 font-semibold">
              {countries.length}
            </span>
          </p>

          {/* Country Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {countries.map((c) => (
              <CountryCard
                key={c.cca3}
                name={c.name.common}
                flag={c.flags.svg}
                code={c.cca3}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
