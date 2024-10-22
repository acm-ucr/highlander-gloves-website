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
      className={`mb-8 mt-8 flex max-w-xl flex-col text-white ${
        side === "left" ? "mr-auto" : "ml-auto"
      }`}
    >
      <div className="flex-row justify-center">
        <Header position={side} title={name} />
      </div>

      <div className="mt-4 flex w-full flex-col justify-center p-6 text-2xl">
        <p>{description}</p>
        <p>{location}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Event;
