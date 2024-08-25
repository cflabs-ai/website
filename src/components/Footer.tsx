import Link from "next/link";
import { navItems } from "./NavBar";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row py-16">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={index == 0 ? "/" : `#${item.toLowerCase()}`}
            className={`my-1 mx-4 font-[200] hover:text-mint text-center sm:text-left duration-300`}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="w-full bg-mint">
        <div className="w-full max-w-[1300px] mx-auto px-4 py-1 md:py-5 text-xs md:text-sm text-black">
          <p className="w-full text-center md:text-left">
          © 2024 CF Labs Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
