import Landing from "@/components/home/Landing";
import GetStarted from "@/components/home/GetStarted";
import VolunteerOpportunities from "@/components/home/VolunteerOpportunities";
import WhyVolunteer from "@/components/home/WhyVolunteer";
import Socials from "@/components/home/Socials";
import Example from "@/components/Example";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <Landing />
      <GetStarted />
      <VolunteerOpportunities />
      <WhyVolunteer />
      <Socials />
      <Example txt1="Change" txt2="This" txt3="Text" />
    </div>
  );
};

export default Home;
