// [2A] BASIC ROUTES - URL: https://localhost:3000/about

import Button from "@/components/Button";
import ButtonSimple from "@/components/ButtonSimple";
import Link from "next/link";
import Image from "next/image";
import WorldBlack from "@/components/WorldBlack";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black ">
      <div className="flex flex-col md:flex-row w-full max-w-6xl px-6 py-12 gap-8">
        {/* 3D Model Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full h-[300px] md:h-[500px]">
            <WorldBlack />
          </div>
        </div>

        {/* Text Content Section */}
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
            GeoGlobe uses the REST Countries API to gather up-to-date country
            data. This open-source API provides rich information about all
            recognized nations and territories.
          </p>

          <div className="space-x-4">
            <Link href="/task">
              <Button>Explore Countries</Button>
            </Link>
            <Link href="/contact">
              <ButtonSimple>Contact Us</ButtonSimple>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
