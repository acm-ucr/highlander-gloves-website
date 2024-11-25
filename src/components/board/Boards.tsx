import React from "react";
import Board from "./Board";
import { Members } from "@/data/BoardMembers";

const Boards = () => {
  return (
    <div className="grid w-3/4 grid-cols-2 gap-x-[15%] gap-y-[6%] pb-[90%] pt-[8%] md:w-5/6 md:grid-cols-3 md:gap-x-[10%] md:gap-y-[10%] md:pb-[50%]">
      {Members.map((Member) => (
        <div className="max-w-[348px]" key={Member.key}>
          <Board
            key={Member.key}
            photo={Member.image}
            name={Member.name}
            position={Member.position}
          />
        </div>
      ))}
    </div>
  );
};

export default Boards;
