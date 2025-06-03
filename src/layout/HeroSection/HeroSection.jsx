import WorldBlack from "@/components/WorldBlack";
import Button from "@/components/Button";
import ButtonSimple from "@/components/ButtonSimple";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        className="flex flex-col md:flex-row w-full max-w-6xl px-6 py-12 gap-8"
        role="region"
        aria-labelledby="hero-heading"
      >
        {/* 3D Model Section */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <div className="w-full h-[300px] md:h-[500px]">
            <WorldBlack />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center space-y-6 px-4">
          <h1
            id="hero-heading"
            className="text-4xl text-white md:text-6xl font-bold leading-tight"
          >
            Discover the World, One Country at a Time
          </h1>
          <p className="text-md text-white md:text-lg font-light">
            Explore detailed profiles of every nation—facts, flags, regions, and
            more—powered by the REST Countries API.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Link href="/country" passHref legacyBehavior>
              <Button ariaLabel="Explore country profiles">
                Explore Countries
              </Button>
            </Link>
            <Link href="/continent" passHref legacyBehavior>
              <ButtonSimple ariaLabel="Filter countries by continent">
                Filter by Continent
              </ButtonSimple>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
