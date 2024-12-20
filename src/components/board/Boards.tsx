import React from "react";
import Board from "./Board";
import { Members } from "@/data/BoardMembers";
import Image from "next/image";
import line from "@/public/board/line.svg";

const Boards = () => {
  return (
    <div className="relative grid w-3/4 grid-cols-2 gap-x-[15%] gap-y-[6%] overflow-y-clip pb-[90%] pt-[8%] md:w-5/6 md:grid-cols-3 md:gap-x-[10%] md:gap-y-[10%] md:pb-[50%]">
      <Image
        className="absolute left-0 top-0 hidden w-screen md:block"
        src={line}
        alt="decorative line"
      />

      {Members.map((Member) => (
        <div className="max-w-[348px]" key={Member.key}>
          <Board
            key={Member.key}
            photo={Member.webp}
            name={Member.name}
            position={Member.position}
          />
        </div>
      ))}
    </div>
  );
};

export default Boards;
