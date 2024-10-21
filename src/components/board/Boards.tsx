import Board from "./Board";
import BoardMembers from "@/data/BoardMembers.json";
import Example from "@/public/example.webp";

const Boards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-[128px] gap-y-[176px] pb-[300px] pt-[150px]">
      {BoardMembers.map((Member) => (
        <Board
          key={Member.key}
          photo={Example}
          name={Member.name}
          position={Member.position}
        />
      ))}
    </div>
  );
};

export default Boards;
