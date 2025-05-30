import { useState } from "react";
import CountryCard from "@/components/CountryCard";
import ButtonSimple from "@/components/ButtonSimple";
import Loader from "./Loader";

const REGIONS = [
  { name: "Africa", image: "assets/region-africa.png" },
  { name: "Americas", image: "assets/region-americas.png" },
  { name: "Asia", image: "assets/region-asia.png" },
  { name: "Europe", image: "assets/region-europe.png" },
  { name: "Oceania", image: "assets/region-oceania.png" },
];

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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-md text-[#35FFAE] text-center mb-6">
        Select a Region
      </h1>

      {/* Region Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {REGIONS.map((region) => (
          <button
            key={region.name}
            onClick={() => fetchByRegion(region.name)}
            className={`border rounded-b-md border-black overflow-hidden hover:border-[#35FFAE] transition ${
              selectedRegion === region.name ? "ring-2 ring-[#35FFAE]" : ""
            }`}
          >
            <img
              src={region.image}
              alt={region.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

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
            <h2 className="text-md text-end text-[#35FFAE] mb-4">
              countries in: <span className="capitalize">{selectedRegion}</span>
            </h2>
          )}

          {/* Country Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {countries.map((c) => (
              <CountryCard
                key={c.cca3}
                name={c.name.common}
                flag={c.flags.svg}
              />
            ))}
          </div>

          {/* Total Count */}
          <p className="text-center mt-8 text-gray-700">
            Total Results:{" "}
            <span className="font-semibold">{countries.length}</span>
          </p>
        </>
      ) : null}
    </div>
  );
}
