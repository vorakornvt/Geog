import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Button from "./Button";
import ButtonSimple from "./ButtonSimple";
import Loader from "./Loader";

const defaultCountries = [
  "france",
  "japan",
  "brazil",
  "thailand",
  "canada",
  "australia",
];

export default function CountrySearch() {
  const [searchType, setSearchType] = useState("name");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchDefault = async () => {
      setLoading(true);
      try {
        const promises = defaultCountries.map((name) =>
          fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
            res.json()
          )
        );
        const dataArrays = await Promise.all(promises);
        const combined = dataArrays.flat();
        setResults(combined);
      } catch (err) {
        setErrorMsg("Failed to load default countries.");
      } finally {
        setLoading(false);
      }
    };
    fetchDefault();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults([]);
    setErrorMsg("");

    try {
      const endpoint = `https://restcountries.com/v3.1/${searchType}/${query.trim()}`;
      const res = await fetch(endpoint);

      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      if (data.length === 0) throw new Error("Empty result");
      setResults(data);
    } catch (err) {
      setErrorMsg("No countries found. Please check your search.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuery("");
    setErrorMsg("");
    setResults([]);
  };

  return (
    <div className="p-6">
      {/* Filter Controls */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Select and Input Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-4 text-white py-2 border rounded-md"
          >
            <option value="capital">Search by Capital</option>
            <option value="name">Search by Name</option>
          </select>

          <input
            type="text"
            placeholder={`Enter ${searchType}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 text-white border rounded-md w-full "
          />
        </div>
        {/* Buttons Row */}
        <div className="flex items-center justify-end gap-4">
          <Button onClick={handleSearch}>Search</Button>
          <ButtonSimple onClick={handleReset}>Reset</ButtonSimple>
        </div>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <p className="text-red-600 text-center font-medium mb-4">{errorMsg}</p>
      )}

      {/* Results */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {results.map((country) => (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              flag={country.flags.svg}
              code={country.cca3}
            />
          ))}
        </div>
      )}
      {/* Total results at the bottom */}
      {!loading && results.length > 0 && (
        <p className="text-center mt-8 text-gray-400">
          Total Results: <span className="font-semibold">{results.length}</span>
        </p>
      )}
    </div>
  );
}
