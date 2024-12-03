import Boards from "@/components/board/Boards";
import meetTheBoard from "@/public/title/meetTheBoard.webp";
import Title from "@/components/Title";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Title
        webp={meetTheBoard}
        alt="Meet the Board Header Image"
        txt="MEET THE BOARD"
      />
      <Boards />
    </div>
  );
};

export default page;
