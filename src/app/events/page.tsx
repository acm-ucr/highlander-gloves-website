"use client";
import Calendar from "@/components/events/caledar/Calendar";
import Title from "@/components/Title";
import upcomingEvents from "@/public/title/upcomingEvents.webp";
import EventsRender from "@/components/events/EventsRender";
import { EventProps } from "@/components/ui/calendar";
import { useEffect, useState } from "react";

interface GoogleCalendarEvents {
  start: {
    dateTime?: string;
    date?: string;
  };
  summary: string;
  location?: string;
}

const page = () => {
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

      <EventsRender />
      <Calendar events={events} />
    </div>
  );
};

export default page;
