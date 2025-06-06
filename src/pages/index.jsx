import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/layout/HeroSection/HeroSection";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>GROG | Home</title>
        <meta
          name="description"
          content="GREG is a fast, modern web app that provides detailed country information using the REST Countries API. Explore population, region, flags, and more in one place."
        />
        <meta
          name="keywords"
          content="GREG, country information app, REST Countries API, country data, world countries, population, geography, flags, modern web app"
        />
        <meta name="author" content="Vorakorn Taweetawon" />
      </Head>
      <HeroSection />
    </Fragment>
  );
}

export default HomePage;
