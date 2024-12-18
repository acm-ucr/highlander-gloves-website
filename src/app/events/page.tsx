"use client";
import Calendar from "@/components/events/caledar/Calendar";
import Title from "@/components/Title";
import upcomingEvents from "@/public/title/upcomingEvents.webp";
import Events from "@/components/events/Events";
import { EventProps } from "@/components/ui/calendar";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "framer-motion";

interface GoogleCalendarEvents {
  start: {
    dateTime?: string;
    date?: string;
  };
  summary: string;
  location?: string;
  description?: string;
}

const page = () => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      if (!apiKey || !calendarId) {
        console.error("API Key or Calendar ID is missing.");
        return;
      }

      const today = new Date();
      const timeMin = today.toISOString();
      const timeMax = new Date(today);
      timeMax.setMonth(today.getMonth() + 2);
      const timeMaxISO = timeMax.toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMin,
      )}&timeMax=${encodeURIComponent(timeMaxISO)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedEvents: EventProps[] = data.items.map(
          (event: GoogleCalendarEvents) => ({
            date: new Date(event.start.dateTime || event.start.date || ""),
            title: event.summary || "No Title",
            startTime: event.start.dateTime || event.start.date || "",
            location: event.location || "N/A",
            description: event.description || "N/A",
          }),
        );

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events from Google Calendar:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex w-full flex-col gap-10">
      <Title
        webp={upcomingEvents}
        txt="UPCOMING EVENTS"
        alt="Upcoming Events Banner"
      />
      <Events />
      <div ref={containerRef}>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1 }}
        >
          <Calendar events={events} />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
