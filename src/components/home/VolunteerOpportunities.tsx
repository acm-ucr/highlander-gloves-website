import Times from "@/components/home/Times";
import Photo from "@/components/Photo";
import VolunteerPhoto from "@/public/home/volunteerOpportunities.webp";

const VolunteerOpportunities = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-10 text-2xl md:text-3xl">
      <p className="pb-3 font-archivo-black">Volunteer Opportunities</p>
      <div className="flex w-10/12 flex-col border-t-[3px] border-white sm:w-8/12 md:w-6/12 lg:w-3/12" />
      <p className="w-11/12 p-6 text-center font-anek-telegu text-sm sm:w-5/6 sm:p-12 sm:text-base md:text-3xl">
        Highlander Gloves is partnered with Riverside PD to help tutor and coach
        at-risk kids around the area. As a volunteer, you'll be helping clean
        the facility, tutoring kids, and helping run boxing drills. Even if you
        have little to no experience, we'll show you the ropes, so please feel
        free to show up! We'd love all the help we can get!
      </p>
      <div className="flex w-full flex-row py-2 sm:py-10">
        <div className="hidden justify-center sm:flex md:mx-8 md:mt-24 md:h-full md:w-3/5 lg:my-10 lg:w-full">
          <Photo
            image={VolunteerPhoto}
            width=""
            alt="Backside head of girl watching boxing ring fight"
          />
        </div>
        <Times />
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
