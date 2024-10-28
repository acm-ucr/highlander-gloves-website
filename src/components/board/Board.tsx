import Image, { StaticImageData } from "next/image";

const Board = (props: {
  photo: StaticImageData;
  name: string;
  position: string;
}) => {
  return (
    <div className="relative flex">
      <Image
        className="z-10 flex-col items-center rounded-[15px] border md:rounded-[30px]"
        src={props.photo}
        alt="Photo of staff"
      />
      <Image
        className="absolute inset-[8%] flex-col items-center rounded-[15px] border opacity-20 md:inset-[10%] md:rounded-[30px]"
        src={props.photo}
        alt="Shadow of photo"
      />
      <div className="absolute inset-x-0 -bottom-[8px] font-archivo-black text-[12px] md:-bottom-[20px] md:text-[25px] xl:-bottom-[25px] xl:text-[30px] 2xl:-bottom-[32px] 2xl:text-[40px]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.name}
        </p>
        <p className="absolute inset-0 left-[3px] top-[3px] z-20 flex flex-col items-center text-nowrap text-black md:left-[24px] md:top-[10px]">
          {props.name}
        </p>
      </div>
      <div className="absolute inset-x-0 -bottom-[28px] font-archivo-narrow text-[12px] md:-bottom-[60px] md:text-[25px] xl:-bottom-[75px] xl:text-[30px] 2xl:-bottom-[92px] 2xl:text-[40px]">
        <p className="relative z-30 flex flex-col items-center text-nowrap">
          {props.position}
        </p>
        <p className="absolute inset-0 left-[3px] top-[3px] z-20 flex flex-col items-center text-nowrap text-black md:left-[24px] md:top-[10px]">
          {props.position}
        </p>
      </div>
    </div>
  );
};

export default Board;
