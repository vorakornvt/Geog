//pages/country

import React from "react";
import CountrySearch from "@/components/CountrySearch";
import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";

function country() {
  return (
    <Fragment>
      <Head>
        <title>GROG | Country</title>
        <meta
          name="description"
          content="GREG is a fast, modern web app that provides detailed country information using the REST Countries API. Explore population, region, flags, and more in one place."
        />
        <meta
          name="keywords"
          content="About GREG, country information app, REST Countries API, country data, world countries, population, geography, flags, modern web app"
        />
        <meta name="author" content="Vorakorn Taweetawon" />
      </Head>

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
    </Fragment>
  );
}

export default country;
