import FightTeam from "@/components/fight-team/FightTeam";
import GalleryComponent from "@/components/fight-team/Gallery";
import Title from "@/components/Title";
import fightTeam from "@/public/title/fightTeam.webp";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Title webp={fightTeam} alt="Fight Team Header Image" txt="FIGHT TEAM" />
      <FightTeam />
      <Header title="GALLERY" position="middle" />
      <GalleryComponent />
    </div>
  );
};

export default page;
