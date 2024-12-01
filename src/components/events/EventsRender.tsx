"use client";
import { useQuery } from "@tanstack/react-query";
import Event from "@/components/events/EventHeaders";

type EventProps = {
  name: string;
  description: string;
  location: string;
  time: string;
  side: "left" | "right";
};

type ApiEvent = {
  summary?: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
};

const fetchEvents = async (): Promise<EventProps[]> => {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
    }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
    &singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}`,
  );

  if (!response.ok) {
    throw new Error("Error fetching events");
  }

  const data = await response.json();

  return (data.items || [])
    .map((item: ApiEvent, index: number) => ({
      name: item.summary || "Unnamed Event",
      description: item.description || "No description available.",
      location: item.location || "No location specified.",
      time: item.start.dateTime
        ? new Date(item.start.dateTime).toLocaleString()
        : item.start.date
          ? new Date(item.start.date).toLocaleString()
          : "No time available",
      side: index % 2 === 0 ? "left" : "right",
    }))
    .slice(0, 3);
};

const EventsRender = () => {
  const {
    data: events = [],
    error,
    isLoading,
  } = useQuery<EventProps[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  return (
    <div className="flex w-full flex-col font-anek-telegu text-3xl">
      <div className="mt-8">
        {events.map((event: any, index: number) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsRender;
