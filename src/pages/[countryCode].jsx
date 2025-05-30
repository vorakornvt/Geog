import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function CountryDetail() {
  const router = useRouter();
  const { countryCode } = router.query;

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!countryCode) return;

    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const data = await res.json();
        setCountry(data[0]);
      } catch (err) {
        console.error("Failed to fetch country:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (loading)
    return (
      <div className="min-h-screen  items-center justify-center bg-black ">
        <Loader />
      </div>
    );
  if (!country) return <p className="text-center mt-10">Country not found.</p>;

  return (
    <div className="min-h-screen  items-center justify-center bg-black ">
      <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-40 mb-4"
      />
      <p>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      {/* Add more details if needed */}
    </div>
  );
}
