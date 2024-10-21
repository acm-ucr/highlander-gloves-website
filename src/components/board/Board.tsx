import Image from "next/image";

const Board = (props: {
  photo: string;
  name: string;
  position: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="relative flex">
      <Image
        className="z-10 flex-col items-center rounded-[1.875rem] border"
        src={props.photo}
        alt="Photo of staff"
        width={props.width}
        height={props.height}
      ></Image>
      <Image
        className="absolute inset-[10%] flex-col items-center rounded-[1.875rem] border opacity-20"
        src={props.photo}
        alt=""
        width={props.width}
        height={props.height}
      ></Image>
      <div className="absolute inset-x-0 -bottom-[1.95rem] font-archivo-black text-[2.5rem]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.name}
        </p>
        <p className="absolute inset-0 left-[1.5rem] top-[.6rem] z-20 flex flex-col items-center text-nowrap text-black">
          {props.name}
        </p>
      </div>
      <div className="absolute inset-x-0 -bottom-[5.75rem] font-archivo-narrow text-[2.5rem]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.position}
        </p>
        <p className="absolute inset-0 left-[1.5rem] top-[.6rem] z-20 flex flex-col items-center text-nowrap text-black">
          {props.position}
        </p>
      </div>
    </div>
  );
};

export default Board;
