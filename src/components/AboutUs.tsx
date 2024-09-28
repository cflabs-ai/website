import AboutCardAorakiBg from "./svg/AboutCardAorakiBg";
import AboutCardIntchainsBg from "./svg/AboutCardIntchainsBg";

type Collaborator = {
  title: string;
  description: string;
  link: string;
  background: JSX.Element;
  logoPath: string;
};

const collaborators: Collaborator[] = [
  {
    title: "Intchains Group",
    description:
      "Leading provider of integrated solutions consisting of high-performance application specific integrated circuit (ASIC) chips and ancillary software and hardware for blockchain applications.",
    link: "https://intchains.com/",
    background: <AboutCardIntchainsBg />,
    logoPath: "intchains.png",
  },
  {
    title: "Aoraki Labs",
    description:
      "We build the next generation of computational infrastructure for AI and blockchain.",
    link: "https://aoraki-labs.io/",
    background: <AboutCardAorakiBg />,
    logoPath: "aoraki.png",
  },
];

export default function AboutUs() {
  const buildCard = ({
    title,
    description,
    link,
    background,
    logoPath,
  }: Collaborator) => (
    <div
      key={title}
      className="relative flex flex-col justify-start w-full md:h-[500px] lg:h-[580px] text-left p-10"
    >
      <div className="absolute w-full h-full top-0 left-0 z-[-1] rounded-2xl">
        {background}
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-[-2] bg-gradient-to-tr from-mint from-[-100%] to-50% to-transparent opacity-25 rounded-2xl" />
      <div className="absolute w-full h-full top-0 left-0 z-[-2] bg-gradient-to-bl from-mint from-[-100%] to-50% to-transparent opacity-25 rounded-2xl" />
      <div className="w-[50px] md:w-[80px] h-auto">
        <img
          src={logoPath}
          alt={title}
          className="h-auto w-full"
        />
      </div>
      <h3 className="sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.75rem] font-[200] mt-4 md:mt-10">
        {title}
      </h3>
      <p className="text-[0.9rem] font-[200] mt-2 text-smoke">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-sm font-[300] mt-4 md:mt-auto w-max"
      >
        <div className="flex">
          <p>Learn more</p>
          <div className="h-[17px] w-[20px] ml-2 mt-[2px]">
            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.66663 8H13.3333M13.3333 8L9.33329 4M13.3333 8L9.33329 12"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center w-full max-w-[1200px] lg:mt-[6rem] text-center">
      <div id="about" className="absolute invisible top-[-5rem]" />
      <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[200] px-4">
        About CF Labs
      </h2>
      <h4 className="text-sm sm:text-[1rem] md:text-[1.25rem] font-[200] mt-3 md:mt-5 mb-6 px-4 text-smoke">
        A Joint Venture of Intchains Group & Aoraki Labs.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
        {collaborators.map((collaborator) => buildCard(collaborator))}
      </div>
    </div>
  );
}
