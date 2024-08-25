import CfLabsFullLogo from "./svg/CfLabsFullLogo";

export default function ContactUs() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[700px] mt-[3rem] sm:mt-[4rem] md:mt-[8rem] lg:mt-[16rem]">
      <div id="contact" className="absolute invisible top-[-5rem]" />
      <div className="h-[32px]">
        <CfLabsFullLogo />
      </div>
      <p className="md:text-2xl lg:text-3xl px-10 py-10 font-medium text-center">
        Get in touch with us for inquiries, partnerships, or to learn more about
        our services and solutions.
      </p>
      <a href="mailto:feiwqonvdao32r@gmail.com">
        <div className="flex items-center justify-center w-[118px] h-[48px] rounded-full bg-mint text-black font-[300] hover:bg-emerald-200">
          Contact Us
        </div>
      </a>
    </div>
  );
}
