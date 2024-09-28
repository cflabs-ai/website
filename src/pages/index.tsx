import { Alexandria } from "next/font/google";
import Layout from "@/components/Layout";
import HomepageHero from "@/components/HomepageHero";
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";
import Partners from "@/components/Partners";
import ContactUs from "@/components/ContactUs";

const inter = Alexandria({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout location="Home">
      <HomepageHero />
      <AboutUs />
      {/* <div className="relative">
        <div id="vision" className="absolute invisible top-[-5rem]" />
        <h1 className="max-w-[1200px] text-xl sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-tight font-[300] px-10 my-[5rem] sm:my-[7rem] md:my-[12rem] lg:my-[16rem]">
          To be the <span className="text-mint">global</span> pioneer of{" "}
          <span className="text-mint">provider</span> of Cryptography and{" "}
          <span className="text-mint">AI</span> acceleration in blockchain{" "}
          <span className="text-mint">industry</span>.
        </h1>
      </div> */}
      {/* <OurTeam /> */}
      {/* <Partners /> */}
      <ContactUs />
    </Layout>
  );
}
