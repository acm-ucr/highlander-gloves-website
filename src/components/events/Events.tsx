"use client";
import { useQuery } from "@tanstack/react-query";
import Event from "@/components/events/Event";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const event1Ref = useRef(null);
  const isEvent1InView = useInView(event1Ref, { once: true });
  const event2Ref = useRef(null);
  const isEvent2InView = useInView(event1Ref, { once: true });
  const event3Ref = useRef(null);
  const isEvent3InView = useInView(event1Ref, { once: true });

  const {
    data: events = [],
    error,
    isLoading,
  } = useQuery<EventProps[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center font-anek-telegu text-3xl">
        Loading events...
      </p>
    );
  if (error)
    return (
      <p className="my-10 flex items-center justify-center font-anek-telegu text-3xl">
        Error fetching events
      </p>
    );
  return (
    <div className="flex w-full flex-col font-anek-telegu text-3xl">
      <div className="mt-8" ref={event1Ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isEvent1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1 }}
        >
          {events && events[0] && <Event {...events[0]} />}
        </motion.div>
      </div>

      <div className="mt-8" ref={event2Ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isEvent2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 2 }}
        >
          {events && events[1] && <Event {...events[1]} />}
        </motion.div>
      </div>

      <div className="mt-8" ref={event3Ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isEvent3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 2.3 }}
        >
          {events && events[2] && <Event {...events[2]} />}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
