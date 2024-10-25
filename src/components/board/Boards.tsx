import React from "react";
import Board from "./Board";
import { Members } from "@/data/BoardMembers";

const Boards = () => {
  return (
    <div className="grid grid-cols-2 gap-x-[15%] gap-y-[6%] p-[10%] pb-[90%] pt-[8%] md:grid-cols-3 md:gap-[10%] md:pb-[50%]">
      {Members.map((Member) => (
        <div className="max-w-[348px]">
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
