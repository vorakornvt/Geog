import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 py-4">
      {/* Top Footer: Logo + Nav Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left: Logo */}
        <Link href="/" className=" mx-auto md:mb-0">
          <Image
            src="/assets/logoOw.png"
            alt="Focus Logo"
            width={60}
            height={60}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Bottom Footer: Social + Copyright */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#35FFAE]"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#35FFAE]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#35FFAE]"
          >
            <FaGoogle size={20} />
          </a>
        </div>

        <p className="text-xs font-main text-center">
          © {getCurrentYear()} — Vorakorn Taweetawon — Fullstack
        </p>
      </div>
    </footer>
  );
}

export default Footer;
