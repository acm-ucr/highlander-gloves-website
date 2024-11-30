import Boards from "@/components/board/Boards";
import Image from "next/image";
import line from "@/public/board/line.svg";
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

      <Image
        className="absolute left-0 top-0 w-full"
        src={line}
        alt="decorative line"
      />
    </div>
  );
};

export default page;
