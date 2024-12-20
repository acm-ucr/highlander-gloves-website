"use client";
import { CalendarEvents, EventProps } from "@/components/ui/calendar";
import Image from "next/image";
import page from "@/public/events/calendarbackground.webp";
import { useState } from "react";

const Calendar = ({ events }: { events: EventProps[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative mb-[15vw] mt-[4vw] flex flex-col items-center justify-center">
      <div className="absolute bottom-[13.5%] right-[8.25%] z-10 h-[75%] w-[75%]">
        <Image alt="background" src={page} className="object-contain" />
      </div>
      <div className="absolute top-[-5.5%] z-30 flex flex-row space-x-3 font-asap-condensed text-xl md:top-[-3.5%] md:space-x-10 md:text-6xl">
        {Array.from({ length: 12 }).map((_, index: number) => (
          <p key={index}>C</p>
        ))}
      </div>

      <CalendarEvents
        mode="single"
        selected={date}
        onSelect={setDate}
        events={events}
        className="relative z-20 h-[70vw] w-[70vw] rounded-xl bg-hlg-red-300 p-3 font-archivo-black"
      />
    </div>
  );
};

export default Calendar;
