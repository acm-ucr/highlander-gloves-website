import { CalendarEvents } from "@/components/events/caledar/CalendarEvents";
import Image from "next/image";
import page from "@/public/events/calendarbackground.webp";

const date = new Date();
const year = date.getFullYear();

const Calendar = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center">
      <div className="absolute right-[35.85%] top-[30%] z-0 h-[25%] w-[25%]">
        <Image alt="background" src={page} className="object-contain" />
      </div>
      <div className="absolute top-[18.5%] z-20 flex flex-row space-x-4 text-2xl">
        C C C C C C C C C C C C
      </div>
      <div className="absolute top-[24%] z-20 font-archivo-black">{year}</div>
      <CalendarEvents className="z-10" />
    </div>
  );
};

export default Calendar;
