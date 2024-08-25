import Image from "next/image";

const teamMembers = [
  {
    name: "Jerry",
    title: "Founder & CEO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-1.png"
        alt="profile pic 1"
      />
    ),
  },
  {
    name: "Tom",
    title: "CTO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-2.png"
        alt="profile pic 2"
      />
    ),
  },
  {
    name: "Spike",
    title: "COO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-3.png"
        alt="profile pic 3"
      />
    ),
  },
  {
    name: "Tyke",
    title: "CFO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-4.png"
        alt="profile pic 4"
      />
    ),
  },
  {
    name: "Nibbles",
    title: "CIO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-5.png"
        alt="profile pic 5"
      />
    ),
  },
  {
    name: "Droopy",
    title: "CDO",
    photo: (
      <Image
        width={56}
        height={56}
        src="/profile-pic-6.png"
        alt="profile pic 6"
      />
    ),
  },
];

export default function OurTeam() {
  const Card = (name: string, title: string, photo: JSX.Element) => (
    <div key={name} className="flex flex-col items-center sm:items-start w-full text-center sm:text-left p-5 sm:p-10 bg-darkGrey rounded-2xl border-[1px] border-neutral-800">
      {photo}
      <h3 className="sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.2rem] font-[300] mt-4 md:mt-8">
        {name}
      </h3>
      <p className="text-[0.9rem] font-[200] mt-2 text-smoke">{title}</p>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center w-full max-w-[1200px] lg:mt-[6rem] text-center">
      <div id="team" className="absolute invisible top-[-5rem]" />
      <h2 className="w-full text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[200] px-10 text-left">
        Our Team
      </h2>
      <h4 className="w-full text-sm sm:text-[1rem] md:text-[1.25rem] font-[200] mt-3 md:mt-5 mb-6 px-10 text-smoke text-left">
        All working towards our shared goals.
      </h4>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 px-10 py-4 sm:py-8">
        {teamMembers.map((member) =>
          Card(member.name, member.title, member.photo)
        )}
      </div>
    </div>
  );
}
