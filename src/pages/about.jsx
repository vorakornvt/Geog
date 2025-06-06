// [2A] BASIC ROUTES - URL: https://localhost:3000/about

import Button from "@/components/Button";
import ButtonSimple from "@/components/ButtonSimple";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        {" "}
        <title>GROG | About</title>
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

      <div className="min-h-screen flex items-center justify-center bg-black ">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center space-y-6 px-4">
          <Image
            src="/assets/CT.png"
            alt="not found 404"
            height={90}
            width={90}
            className="mx-auto"
          />
          <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight">
            Why Explore the World?
          </h1>
          <p className="text-md md:text-lg text-white font-light">
            GeoG uses the REST Countries API to gather up-to-date country data.
            This open-source API provides rich information about all recognized
            nations and territories.
          </p>

          <div className="space-x-4">
            <Link href="/country">
              <Button>Explore Countries</Button>
            </Link>
            <Link href="/contact">
              <ButtonSimple>Contact Us</ButtonSimple>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
