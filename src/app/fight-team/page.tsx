import FightTeam from "@/components/fight-team/FightTeam";
import Gallery from "@/components/fight-team/Gallery";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <FightTeam />
      <Gallery />
    </div>
  );
};

export default page;
