import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-1  border-base-300">
      <div className="navbar-start">
        <Link href="/">
          {" "}
          <Image
            src="/assets/fulllogo.png"
            alt="Focus Logo"
            width={175}
            height={175}
            className="ms-5 pb-2"
            priority
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-[16px] gap-5 px-10 font-medium">
          <li>
            <Link href="/about">Taks</Link>
          </li>
          <li>
            <Link href="/about">Productivity</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
