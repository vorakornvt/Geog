import React from "react";
import { Fragment } from "react";
import Head from "next/head";

import RegionSearchPage from "@/components/RegionSearchPage";

function continent() {
  return (
    <Fragment>
      <Head>
        <title>GROG | Continent</title>
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
      <main className="bg-black">
        <RegionSearchPage />
      </main>
    </Fragment>
  );
}

export default continent;
