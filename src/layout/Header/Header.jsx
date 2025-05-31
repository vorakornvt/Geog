"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-black shadow-sm">
      <div className="navbar-start">
        {/* Hamburger dropdown for small screens */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <Link href="/country" className="text-white hover:text-[#35FFAE]">
                Search Country
              </Link>
            </li>
            <li>
              <Link href="/region" className="text-white hover:text-[#35FFAE]">
                Region
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-[#35FFAE]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-[#35FFAE]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
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

      {/* Main menu for large screens */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-[16px] gap-2 px-1 font-medium">
          <li>
            <Link href="/country" className="text-white hover:text-[#35FFAE]">
              Search Country
            </Link>
          </li>
          <li>
            <Link href="/region" className="text-white hover:text-[#35FFAE]">
              Region
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-[#35FFAE]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-[#35FFAE]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
