import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 py-8">
      {/* Top Section: Logo */}
      <div className="flex justify-center md:justify-start mb-6">
        <Link className="mx-auto" href="/" aria-label="Homepage">
          <Image
            src="/assets/logoOw.png"
            alt="Focus Logo"
            width={50}
            height={50}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Social Links + Description */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#35FFAE] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/vorakornvt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#35FFAE] transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:vorakorn.vt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-[#35FFAE] transition-colors"
          >
            <FaGoogle size={20} />
          </a>
        </div>

        {/* Portfolio Link */}
        <p className="text-xs">
          Want to know more about me? Check out my{" "}
          <a
            href="https://vorakornvt-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#35FFAE] hover:underline"
          >
            portfolio
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs font-main text-center">
          © {currentYear} — Vorakorn Taweetawon — Design & Frontend
        </p>
      </div>
    </footer>
  );
}

export default Footer;
