import { CalendarEvents } from "@/components/ui/calendar";
import Image from "next/webp";
import page from "@/public/events/calendarbackground.webp";

const date = new Date();
const year = date.getFullYear();

const Calendar = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center">
      <div className="absolute right-[7.75%] top-[44%] z-0">
        <Image alt="background" src={page} className="object-contain" />
      </div>
      <div className="absolute top-[16.5%] z-20 flex flex-row space-x-10 font-asap-condensed text-6xl">
        {Array.from({ length: 12 }).map((_, index: number) => (
          <p key={index}>C</p>
        ))}
      </div>
      <div className="absolute top-[32%] z-20 font-archivo-black text-4xl">
        {year}
      </div>
      <CalendarEvents className="z-10 h-[70vw] w-[70vw] rounded-xl bg-hlg-red-300 p-3 font-archivo-black" />
    </div>
  );
};

export default Calendar;
