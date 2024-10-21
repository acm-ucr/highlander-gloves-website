import Board from "./Board";
import BoardMembers from "@/data/BoardMembers.json";
import example from "@/public/example.webp";

const Boards = () => {
  return (
    <div className="flex w-full flex-row justify-center text-3xl">
      {BoardMembers.map((Member) => (
        <Board photo={example} name={Member.name} position={Member.position} />
      ))}
    </div>
  );
};

export default Boards;
