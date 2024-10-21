import React from "react";
import Board from "./Board";
import BoardMembers from "@/data/BoardMembers.json";

const Boards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-[128px] gap-y-[176px] pb-[300px] pt-[150px]">
      {BoardMembers.map((Member) => (
        <Board
          key={Member.key}
          photo={Member.image}
          name={Member.name}
          position={Member.position}
          width={348}
          height={376}
        />
      ))}
    </div>
  );
};

export default Boards;
