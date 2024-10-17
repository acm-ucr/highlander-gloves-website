import Times from "@/components/home/Times";
import Photo from "@/components/Photo";
import VolunteerPhoto from "@/public/home/volunteerOpportunities.webp";

const VolunteerOpportunities = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-10 text-3xl">
      <p className="pb-3 font-archivo-black">Volunteer Opportunities</p>
      <div className="flex flex-col border-t-[3px] border-white w-3/12" />
      <p className="w-5/6 p-12 text-center font-anek-telegu">
        Highlander Gloves is partnered with Riverside PD to help tutor and coach
        at-risk kids around the area. As a volunteer, you'll be helping clean
        the facility, tutoring kids, and helping run boxing drills. Even if you
        have little to no experience, we'll show you the ropes, so please feel
        free to show up! We'd love all the help we can get!
      </p>
      <div className="flex w-full flex-row py-10">
        <div className="flex items-center justify-center">
          <Photo
            image={VolunteerPhoto}
            width={"w-1/2"}
            alt="Backside head of girl watching boxing fight"
          />
        </div>
        <Times />
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
