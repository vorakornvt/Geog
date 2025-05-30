// [2A] BASIC ROUTES - URL: https://localhost:3000/about

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <section className="w-full max-w-md text-center flex flex-col items-center space-y-6">
        <Image
          src="/assets/AB.png"
          alt="Profile or brand logo"
          height={250}
          width={250}
          className="rounded-full"
        />
        <p className="font-main text-white text-sm">
          I&apos;d love to hear from you.{" "}
          <span className="text-[#35FFAE]">Get in touch.</span> I&apos;m
          friendly.
        </p>

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
      </section>
    </main>
  );
};
export default ContactPage;
