import React from "react";
import Board from "./Board";
import { Members } from "@/data/BoardMembers";

const Boards = () => {
  return (
    <div className="grid grid-cols-3 gap-[10%] p-[10%] pb-[50%] pt-[8%]">
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
