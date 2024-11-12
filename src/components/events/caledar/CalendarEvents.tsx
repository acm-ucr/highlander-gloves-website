"use client";

import * as React from "react";
import { IoMdPlay } from "react-icons/io";
import { DayPicker, DateFormatter } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/events/caledar/button";

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
  return months[month.getMonth() - 1];
}

function CalendarEvents({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: formatWeekdayLabel,
        formatCaption: captionMonth,
      }}
      className={cn(
        "rounded-md bg-hlg-red-300 p-3 font-archivo-black",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption:
          "absolute bg-black rounded-md top-[9%] mx-[32%] flex justify-center relative items-center",
        caption_label: "text-[9px] p-2 font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 opacity-100 hover:opacity-50",
        ),
        nav_button_previous: "absolute scale-x-[-1] left-[-4%]",
        nav_button_next: "absolute right-[-4%]",
        table: "w-10 h-10 rounded-md bg-hlg-light-gray space-y-1",
        head_row: "flex text-[9px]",
        head_cell:
          "text-hlg-red-200 border border-hlg-red-300 font-bold w-full h-10 flex items-center justify-center",
        row: "flex w-full mt-0",
        cell: "h-10 w-10 text-center text-sm p-0 border border-hlg-red-300 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-10 w-10 p-0 m-auto text-hlg-red-200 font-normal",
        day_range_end: "day-range-end",
        day_selected:
          "bg-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50",
        day_today: "bg-hlg-red-200 text-white",
        day_outside: "day-outside text-bg-hlg-red-200 opacity-[57%]",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <IoMdPlay className="h-4 w-4" />,
        IconRight: ({ ...props }) => <IoMdPlay className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
CalendarEvents.displayName = "Calendar";

export { CalendarEvents };
