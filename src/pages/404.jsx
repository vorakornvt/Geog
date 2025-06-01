import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <Fragment>
      <Head>
        <title>GROG | 404 Not found</title>
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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div>
            <Image
              src="/assets/NF.png"
              alt="not found 404"
              height={500}
              width={500}
            />
          </div>

          <Link className="text-white text-lg " href="/">
            This page could not be found
            <span className="text-[#35FFAE]"> Home</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
