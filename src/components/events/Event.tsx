import Header from "@/components/Header";

type EventProps = {
  name: string;
  description: string;
  location: string;
  time: string;
  side: "left" | "right";
};

const Event = ({ name, description, location, time, side }: EventProps) => {
  return (
    <div
      className={`mb-0 mt-0 flex flex-col text-white md:mb-8 md:mt-8 ${
        side === "left"
          ? "mr-auto items-start text-left"
          : "ml-auto items-end text-right"
      } w-11/12 md:max-w-[50%]`}
    >
      <div className="w-3/4 flex-row justify-center text-xs md:w-full md:text-3xl">
        <Header position={side} title={name} />
      </div>

      <div className="mt-0 flex w-full flex-col justify-end p-4 text-base md:mt-4 md:p-6 md:text-2xl">
        <p>{description}</p>
        <p>{location}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Event;
