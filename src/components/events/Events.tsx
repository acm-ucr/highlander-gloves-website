"use client";
import { useQuery } from "@tanstack/react-query";
import Event from "@/components/events/Event";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const Events = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isContainerInView = useInView(containerRef, { once: true });

  const {
    data: events = [],
    error,
    isLoading,
  } = useQuery<EventProps[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // when page is loaded, hasAnimated becomes true, which trigger animation
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, []);

  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center font-anek-telegu text-3xl">
        Loading events...
      </p>
    );

  if (events.length === 0)
    return (
      <p className="my-10 flex items-center justify-center font-anek-telegu text-3xl">
        No Upcoming Events
      </p>
    );
  if (error)
    return (
      <p className="my-10 flex items-center justify-center font-anek-telegu text-3xl">
        Error fetching events
      </p>
    );

  return (
    <div
      className="flex w-full flex-col font-anek-telegu text-3xl"
      ref={containerRef}
    >
      {events.map((event, index) => (
        <Event
          key={index}
          {...event}
          isContainerInView={isContainerInView || hasAnimated} // will animate for either case
          animationIndex={index}
        />
      ))}
    </div>
  );
};

export default Events;
