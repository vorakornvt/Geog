// [2A] BASIC ROUTES - URL: https://localhost:3000/about

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Fragment } from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>GROG | Contact</title>
        <meta
          name="description"
          content="GREG is a fast, modern web app that provides detailed country information using the REST Countries API. Explore population, region, flags, and more in one place."
        />
        <meta
          name="keywords"
          content="About GREG Developer Contact , social media, email, linkin, github"
        />
        <meta name="author" content="Vorakorn Taweetawon" />
      </Head>{" "}
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <section className="w-full max-w-md text-center flex flex-col items-center space-y-6">
          <Image
            src="/assets/AB.png"
            alt="Profile or brand logo"
            height={250}
            width={250}
          />

          {/* Social Media Icons */}
          <div className="flex mx-auto space-x-9">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white" size={35} />
            </a>
            <a
              href="https://github.com/vorakornvt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-white" size={35} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
            >
              <FaGoogle className="text-white" size={35} />
            </a>
          </div>
          <p className="text-white text-sm">
            Want to know more about me? Check out my{" "}
            <span className="text-[#35FFAE]">
              <a
                href="https://vorakornvt-portfolio.vercel.app/"
                target="_blank"
              >
                portfolio
              </a>
            </span>{" "}
            site
          </p>
        </section>
      </main>
    </Fragment>
  );
};
export default ContactPage;
