"use client";

import * as React from "react";
import { IoMdPlay } from "react-icons/io";
import { DayPicker, DateFormatter } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const formatWeekdayLabel: DateFormatter = (day) => {
  const weekdays = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
  return weekdays[day.getDay()];
};

function captionMonth(month: Date) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return months[month.getMonth()];
}

function CalendarEvents({
  className,
  classNames,
  showOutsideDays = true,
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: formatWeekdayLabel,
        formatCaption: captionMonth,
      }}
      className={cn(className)}
      classNames={{
        months: "flex flex-col",
        month: "px-[5%] pt-[15%]",
        caption:
          "absolute flex bg-[#1E1E1E] rounded-xl h-[4vw] w-[14vw] top-[42%] right-[42.25%] justify-center items-center",
        caption_label: "text-3xl p-2 font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-[2vw] w-[2vw] bg-transparent p-0 opacity-100 hover:opacity-50",
        ),
        nav_button_previous: "absolute scale-x-[-1] left-[-4%]",
        nav_button_next: "absolute right-[-4%]",
        table: "w-full space-y-[1vw] rounded-xl bg-hlg-light-gray",
        head_row: "flex w-full aspect-[7/1] text-2xl text-center items-center",
        head_cell:
          "text-hlg-red-200 border border-hlg-red-300 font-bold w-full h-full flex items-center justify-center",
        row: "flex w-full mt-0",
        cell: "relative text-center text-3xl p-0 border border-hlg-red-300",
        day: "h-[9vw] w-[8.75vw] text-hlg-red-200 font-normal",
        day_today: "bg-hlg-red-200 text-white",
        day_outside: "day-outside text-bg-hlg-red-200 opacity-[57%]",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <IoMdPlay className="h-4 w-4" />,
        IconRight: () => <IoMdPlay className="h-4 w-4" />,
      }}
    />
  );
}
CalendarEvents.displayName = "Calendar";

export { CalendarEvents };
