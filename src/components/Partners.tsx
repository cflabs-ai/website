import PartnersEthLogo from "./svg/PartnersEthLogo";

const partners = [
  {
    name: "Jerry",
    logo: <PartnersEthLogo />,
  },
  {
    name: "Tom",
    logo: <PartnersEthLogo />,
  },
  {
    name: "Spike",
    logo: <PartnersEthLogo />,
  },
  {
    name: "Tyke",
    logo: <PartnersEthLogo />,
    bg: "bg-mint",
  },
  {
    name: "Nibbles",
    logo: <PartnersEthLogo />,
  },
  {
    name: "Bob",
    logo: <PartnersEthLogo />,
  },
  {
    name: "Nick",
    logo: <PartnersEthLogo />,
  },
];

export default function Partners() {
  const Card = (name: string, logo: JSX.Element, bg?: string) => (
    <div
      key={name}
      className={`flex items-center justify-center w-[130px] h-[130px] rounded-full border-[1px] border-neutral-800 z-[-1] mx-auto ${
        bg ? bg : "bg-transparent"
      }`}
    >
      <div className="z-20">{logo}</div>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center w-full max-w-[1200px] mt-[3rem] lg:mt-[6rem] text-center">
      <div id="partners" className="absolute invisible top-[-5rem]" />
      <h2 className="w-full text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[200] px-10 text-left">
        CF Labs Partners
      </h2>
      <h4 className="w-full text-sm sm:text-[1rem] md:text-[1.25rem] font-[200] mt-3 md:mt-5 mb-6 px-10 text-smoke text-left">
        We have close cooperation partners.
      </h4>
      <div className="relative w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 px-10 py-4 sm:py-8 justify-center items-center">
        <div className="hidden lg:flex absolute w-full h-full bg-gradient-to-r from-black to-transparent to-15%" />
        <div className="hidden lg:flex absolute w-full h-full bg-gradient-to-l from-black to-transparent to-15%" />
        {partners.map((partner) =>
          Card(partner.name, partner.logo, partner.bg)
        )}
      </div>
    </div>
  );
}
