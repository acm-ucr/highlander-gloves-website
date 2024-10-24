import Landing from "@/components/home/Landing";
import GetStarted from "@/components/home/GetStarted";
import VolunteerOpportunities from "@/components/home/VolunteerOpportunities";
import WhyVolunteer from "@/components/home/WhyVolunteer";
import Socials from "@/components/home/Socials";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <Landing />
      <GetStarted />
      <VolunteerOpportunities />
      <WhyVolunteer />
      <Socials />
    </div>
  );
};

export default Home;
