import Event from "@/components/events/Event";

type EventProps = {
  name: string;
  description: string;
  location: string;
  time: string;
  side: "left" | "right";
};

const eventData: EventProps[] = [
  {
    name: "Event Name 1",
    description: "small description small description, small description, small description",
    location: "Location Here",
    time: "Time",
    side: "left",
  },
  {
    name: "Event Name 2",
    description: "small description, small description, small description, small description",
    location: "Location Here",
    time: "Time",
    side: "right",
  },
  {
    name: "Event Name 3",
    description: "small description, small description, small description, small description",
    location: "Location Here",
    time: "Time",
    side: "left",
  },
];

const Events = () => {
  return (
    <div className="flex w-full flex-col font-anek-telegu text-3xl">
      <div className="mt-8">
        {eventData.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
