import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-black shadow-sm ">
      <div className="navbar-start">
        <Link href="/">
          {" "}
          <Image
            src="/assets/textOwhite.png"
            alt="GrogLogo"
            width={175}
            height={175}
            className="ms-5 pb-2"
            priority
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-[16px] gap-2 px-1 font-medium">
          <li>
            <Link href="/about" className=" text-white hover:text-[#35FFAE] ">
              All Countries
            </Link>
          </li>
          <li>
            <Link href="/about" className=" text-white hover:text-[#35FFAE] ">
              Regions
            </Link>
          </li>
          <li>
            <Link href="/about" className=" text-white hover:text-[#35FFAE] ">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className=" text-white hover:text-[#35FFAE] ">
              Contact
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
