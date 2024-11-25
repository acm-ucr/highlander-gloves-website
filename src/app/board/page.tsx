import Boards from "@/components/board/Boards";
import Image from "next/webp";
import line from "@/public/board/line.svg";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
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
