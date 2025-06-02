// pages/country/[countryCode].js

import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import Link from "next/link";
import Button from "@/components/Button";
import ButtonSimple from "@/components/ButtonSimple";
import Flag3d from "@/components/Flag3d";
import { Fragment } from "react";
import Head from "next/head";

export default function CountryDetail({ country }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  if (!country) return <p className="text-center mt-10">Country not found.</p>;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.entries(country.currencies)
        .map(([code, curr]) => `${curr.name} (${curr.symbol || ""})`)
        .join(", ")
    : "N/A";

  return (
    <Fragment>
      <Head>
        <title>{`GROG | About ${country.name.common}`}</title>

        <meta
          name="description"
          content={`Explore detailed information about ${country.name.common} using the GROG Country App.`}
        />
        <meta name="keywords" content="country info, GROG, flags, details" />
        <meta name="author" content="Vorakorn Taweetawon" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-6 mt-[-100px] gap-8">
          {/* Flag */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full h-[300px] sm:h-[250px] md:h-[500px]">
              <Flag3d prop={country.flags.svg} />
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {country.name.common}
            </h1>
            <p className="text-md md:text-xl font-light text-gray-300">
              {country.name.official}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left text-sm md:text-base">
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion || "N/A"}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Languages:</strong> {languages}
              </p>
              <p>
                <strong>Currency:</strong> {currencies}
              </p>
              <p>
                <strong>Timezones:</strong> {country.timezones?.join(", ")}
              </p>
              <p>
                <strong>Start of Week:</strong> {country.startOfWeek}
              </p>
            </div>

            <div className="mt-6 space-x-4">
              <a
                href={country.maps?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>View on Google Maps</Button>
              </a>
              <Link href="/country">
                <ButtonSimple>Back to Countries</ButtonSimple>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const defaultCountries = [
    "france",
    "japan",
    "brazil",
    "thailand",
    "canada",
    "australia",
  ];

  const responses = await Promise.all(
    defaultCountries.map((name) =>
      fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
        res.json()
      )
    )
  );

  const countryData = responses.flat();

  const paths = countryData.map((country) => ({
    params: { countryCode: country.cca3 },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.countryCode}`
    );
    const data = await res.json();

    if (!data || !data[0]) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        country: data[0],
      },
      revalidate: 86400,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
