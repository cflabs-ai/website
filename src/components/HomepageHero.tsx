import { useEffect, useState } from "react";
import HeroImage from "./svg/HeroImage";

export default function HomepageHero() {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      let randNum = Math.floor(Math.random() * 12) + 1;
      setStage((prev) => {
        while (randNum === prev) {
          randNum = Math.floor(Math.random() * 12) + 1;
        }
        return randNum;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full my-[3rem] sm:my-[7rem]">
      <div className="relative text-xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-[300] px-4">
        <h1 className="mx-auto md:max-w-[800px] lg:max-w-[1200px] text-center mb-1 sm:mb-3 lg:mb-7">
          <span className="mx-auto text-white text-center leading-tight">
            Accelerating Verifiable Decentralized Computing
          </span>
        </h1>
        <div className="absolute w-full h-full top-0 left-0 z-[1] px-4 bg-gradient-radial from-transparent to-black from-20% opacity-30" />
      </div>
      <p className="max-w-[800px] mx-auto py-6 lg:py-12 px-4 text-center text-sm sm:text-xl md:text-2xl font-[200] md:leading-normal text-smoke">
        Researching cutting-edge computation technology in blockchain with
        hardware, including Zero-Knowledge Proof, and AI.
      </p>
      <div className="relative max-w-[1200px] w-full px-10">
        <div className="absolute w-full h-full top-[0] left-[0] z-[10] px-10">
          {stage == 1 && (
            <svg
              className="racing-light-a"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M400 70L355 70"
                stroke="url(#paint22_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 2 && (
            <svg
              className="racing-light-a"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M400 87L355 87"
                stroke="url(#paint22_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 3 && (
            <svg
              className="racing-light-a"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M400 104L355 104"
                stroke="url(#paint22_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 4 && (
            <svg
              className="racing-light-b"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M590 70L635 70"
                stroke="url(#paint23_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 5 && (
            <svg
              className="racing-light-b"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M590 87L635 87"
                stroke="url(#paint23_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 6 && (
            <svg
              className="racing-light-b"
              width="100%"
              viewBox="0 0 1004 240"
              fill="none"
            >
              <path
                d="M590 104L635 104"
                stroke="url(#paint23_linear_39_674)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          {stage == 1 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M104.09 57.41H79.82C70.8061 57.41 63.5 50.1039 63.5 41.09V16.82C63.5 7.80615 70.8061 0.5 79.82 0.5H104.09C113.104 0.5 120.41 7.80615 120.41 16.82V41.09C120.41 50.1039 113.104 57.41 104.09 57.41Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
          {stage == 2 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M23.85 134.11H9.75995C4.6461 134.11 0.5 129.964 0.5 124.85V110.76C0.5 105.646 4.64609 101.5 9.75995 101.5H23.85C28.9638 101.5 33.11 105.646 33.11 110.76V124.85C33.11 129.964 28.9638 134.11 23.85 134.11Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
          {stage == 3 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M100.47 239.22H71.25C60.346 239.22 51.5 230.384 51.5 219.47V190.25C51.5 179.346 60.3363 170.5 71.25 170.5H100.47C111.374 170.5 120.22 179.336 120.22 190.25V219.47C120.22 230.384 111.374 239.22 100.47 239.22Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
          {stage == 4 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M908.09 54.77H886.18C878.076 54.77 871.5 48.1939 871.5 40.09V18.18C871.5 10.0761 878.076 3.5 886.18 3.5H908.09C916.194 3.5 922.77 10.0761 922.77 18.18V40.09C922.77 48.1939 916.194 54.77 908.09 54.77Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
          {stage == 5 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M990.26 139.96H971.2C964.186 139.96 958.5 134.274 958.5 127.26V108.2C958.5 101.186 964.186 95.5 971.2 95.5H990.26C997.274 95.5 1002.96 101.186 1002.96 108.2V127.26C1002.96 134.274 997.274 139.96 990.26 139.96Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
          {stage == 6 && (
            <div className="absolute w-full h-full top-0 left-0 px-10">
              <svg
                className="flash"
                width="100%"
                viewBox="0 0 1004 240"
                fill="none"
              >
                <path
                  d="M902.7 226.83H883.94C877.036 226.83 871.44 221.234 871.44 214.33V195.57C871.44 188.666 877.036 183.07 883.94 183.07H902.7C909.604 183.07 915.2 188.666 915.2 195.57V214.33C915.2 221.234 909.604 226.83 902.7 226.83Z"
                  fill="transparent"
                  stroke="#35F4B0"
                />
              </svg>
            </div>
          )}
        </div>
        <HeroImage />
      </div>
    </div>
  );
}
