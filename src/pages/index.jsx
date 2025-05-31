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
          description="Explore detailed profiles of every nation—facts, flags, regions,
            and more—powered by the REST Countries API."
        />
      </Head>
      <HeroSection />
    </Fragment>
  );
}

export default HomePage;
