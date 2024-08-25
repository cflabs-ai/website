import HeroImage from "./svg/HeroImage";

export default function HomepageHero() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full my-[3rem] sm:my-[7rem]">
      <div className="absolute w-full h-full top-[100px] sm:top-[150px] md:top-[150px] lg:top-[190px] left-0 z-[-1]">
        <div className="z-[-1] w-1/2 h-[280px] md:h-[300px] lg:h-[400px] mx-auto bg-gradient-radial from-mint to-transparent to-70% opacity-15" />
      </div>
      <div className="text-xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-[300] px-4">
        <h1 className="mx-auto max-w-[1200px] text-center mb-1 sm:mb-3 lg:mb-7">
          <span className="mx-auto max-w-[1000px] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-center">
            Pioneering Advanced Computing
          </span>
        </h1>
        <h1 className="mx-auto max-w-[1200px] text-center">
          <span className="mx-auto max-w-[1000px] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-center">
            Solutions for Blockchain
          </span>
        </h1>
      </div>
      <p className="max-w-[800px] mx-auto py-6 lg:py-12 px-4 text-center text-sm sm:text-xl md:text-2xl font-[200] md:leading-normal text-smoke">
        Provide state-of-the-art computational acceleration (ZKP/FHE/AI) to
        enhance blockchain applications.
      </p>
      <div className="max-w-[1200px] w-full h-[100px] sm:h-[160px] lg:h-[240px] mt-8 px-10">
        <HeroImage />
      </div>
    </div>
  );
}
