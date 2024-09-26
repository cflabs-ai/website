import { useState } from "react";
import CfLabsFullLogo from "./svg/CfLabsFullLogo";
import Link from "next/link";
import SocialMedium from "./svg/SocialMedium";
import SocialX from "./svg/SocialX";
import SocialEmail from "./svg/SocialEmail";

export const navItems = [
  "Home",
  "About",
  "Vision",
  "Team",
  // "Partners",
  "Contact",
];

export default function NavBar({ location }: { location: string }) {
  const socials = [
    { name: "Medium", link: "https://medium.com/", icon: SocialMedium },
    { name: "X", link: "https://x.com/CFrontier_Labs", icon: SocialX },
    { name: "Email", link: "mailto: hello@cflabs.ai", icon: SocialEmail },
  ];
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  const handleMobileNavToggle = () => {
    setMobileNavIsOpen(() => (mobileNavIsOpen ? false : true));
  };

  return (
    <header
      id="navbarid"
      className={`sticky pointer-events-auto py-3 md:py-0 top-0 bg-black duration-500 text-smoke border-b-[1px] border-neutral-700 z-50`}
    >
      <section
        className={`flex max-w-[1250px] mx-auto px-5 justify-between items-center duration-500`}
      >
        <div id="dummy-button" className="mx-3 md:hidden"></div>
        <Link
          href="/"
          className="w-[85px] h-[20px] mr-4 min-[830px]:mr-6 min-[950px]:mr-8"
        >
          <CfLabsFullLogo />
        </Link>
        <div className="md:w-full">
          <button
            id="hamburger-button"
            onClick={handleMobileNavToggle}
            className="text-3xl cursor-pointer md:hidden"
          >
            &#9776;
          </button>
          <nav
            className="hidden h-[61px] text-sm md:flex md:items-center"
            aria-label="main"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={index == 0 ? "/" : `#${item.toLowerCase()}`}
                className={`my-1 mx-4 hover:text-white duration-300`}
              >
                {item}
              </Link>
            ))}
            <div className="flex grow justify-end gap-x-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.link}
                  className="flex flex-col justify-center"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={handleMobileNavToggle}
        className={`${
          mobileNavIsOpen ? "flex" : "hidden"
        } flex-col w-full absolute origin-top top-0 bg-black text-3xl justify-content-center animate-open-menu`}
      >
        <button className="self-end px-6 text-7xl">&times;</button>
        <nav
          className="flex flex-col min-h-screen py-2 items-center"
          aria-label="mobile"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`py-4 px-5 hover:text-white`}
            >
              {item}
            </Link>
          ))}

          <div className="flex py-5 gap-x-3">
            {socials.map((social, index) => (
              <a
                key={index}
                target="_blank"
                href={social.link}
                className="flex flex-col justify-center"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </nav>
      </section>
    </header>
  );
}
