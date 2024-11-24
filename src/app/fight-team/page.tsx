import FightTeam from "@/components/fight-team/FightTeam";
import Gallery from "@/components/fight-team/Gallery";
import Title from "@/components/Title";
import fightTeam from "@/public/title/fightTeam.webp";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Title image={fightTeam} alt="Fight Team Header Image" txt="FIGHT TEAM" />
      <FightTeam />
      <Gallery />
    </div>
  );
};

export default page;
