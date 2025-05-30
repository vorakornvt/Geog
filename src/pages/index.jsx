import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/layout/HeroSection/HeroSection";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Home</title>
        <meta
          name="description"
          description="Browse all the coding news of today from around the globe"
        />
      </Head>
      <HeroSection />
    </Fragment>
  );
}

export default HomePage;
