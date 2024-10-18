import Image from "next/image";
import banner from "@/public/title/upcomingEvents.webp";
const page = () => {
  return (
    <div>
      <div className="relative flex flex-row text-3xl">
        <div className="font-archivo absolute bottom-[10%] left-[5%] flex flex-col">
          <div className="font-bold">
            Knocking out the competition one punch at a time
          </div>
          <div className="py-3 text-xl italic">
            Highlander Gloves holds aspirations for winning a title at
            Nationals.
          </div>
          <div className="text-sm">By Mamata Elangovan - March 12, 2024</div>
        </div>
        <Image className="w-screen" src={banner} alt="News" />
      </div>
      <div className="mx-[5%] my-10 flex flex-col">
        <div className="flex justify-center justify-items-center">
          The University of California, Riverside’s (UCR), Highlander Gloves, a
          boxing club, has achieved success in national competitions, including
          the women winning the United States Intercollegiate Boxing Association
          (USIBA) Team Championship last year. Not only that, through their
          partnership with the Riverside Police Foundation, they assist at the
          Raincross Boxing Academy, offering free boxing lessons and tutoring to
          the local youth. Creating a partnership with the community that gives
          back to the next generation and also helps develop club members.
        </div>
      </div>
    </div>
  );
};
export default page;
