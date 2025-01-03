"use client";
import * as React from "react";
import { IoMdPlay } from "react-icons/io";
import { DayPicker } from "react-day-picker";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Modal from "../about/Modal";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export interface EventProps {
  date: Date;
  title: string;
  startTime: string;
  location: string;
  description?: string;
}

function getLastDayOfMonth(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate();
}

function getFirstDayOfLastWeek(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDay = getLastDayOfMonth(date);
  const lastDayDate = new Date(year, month, lastDay);
  const lastDayOfWeek = lastDayDate.getDay();
  const firstDayOfLastWeek = lastDay - lastDayOfWeek;
  return firstDayOfLastWeek;
}

function captionMonth(date: Date) {
  const month = [
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
  return month[date.getMonth()];
}

function captionWeek(date: Date) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return week[date.getDay()];
}

function CalendarEvents({
  className,
  classNames,
  showOutsideDays = true,
  events = [],
  ...props
}: CalendarProps & { events: EventProps[] }) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );

  const eventDays = events.map((event) => event.date);
  const [popupEvent, setPopupEvent] = useState<EventProps | null>(null);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currYear, setCurrentYear] = useState(currentDate.getFullYear());

  const nextDate = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);

    setCurrentDate(newDate);
    setCurrentYear(newDate.getFullYear());
  };

  const prevDate = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);

    setCurrentDate(newDate);
    setCurrentYear(newDate.getFullYear());
  };

  const toggleModal = () => {
    setPopupEvent(null);
  };

  const modifiers = {
    hasEvent: (date: {
      getFullYear: () => number;
      getMonth: () => number;
      getDate: () => number;
    }) =>
      eventDays.some(
        (eventDate) =>
          date.getFullYear() === eventDate.getFullYear() &&
          date.getMonth() === eventDate.getMonth() &&
          date.getDate() === eventDate.getDate(),
      ),
  };

  const CustomDay: React.FC<{
    date: Date;
    selected: boolean;
    onClick: (date: Date) => void;
  }> = ({ date, onClick }) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    const dayEvents = events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate(),
    );

    return (
      <div className="text-overflow-clip relative h-[9vw] w-[8.75vw]">
        <div
          onClick={() => onClick(date)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-[9vw] w-[8.75vw] text-hlg-red-200 md:h-[9vw] md:w-[8.75vw]",
            date.getDate() === getFirstDayOfLastWeek(date)
              ? "rounded-bl-md"
              : "",
            date.getDate() === getLastDayOfMonth(date) ? "rounded-br-md" : "",
            isToday ? "bg-hlg-red-200 text-white" : "",
          )}
        >
          <div className="absolute right-1 top-0 text-xs md:text-3xl">
            {date.getDate()}
          </div>

          {/* i lowkey dont know wh y this placeholder is necessary to preserve padding lemme investigate */}
        </div>

        {dayEvents.length > 0 && (
          <div
            className={`small-scrollbar ${
              isToday
                ? "absolute left-[5%] top-[43%] h-[50%] w-[90%] overflow-hidden rounded-sm bg-white md:top-[38%]"
                : "absolute left-[5%] top-[43%] h-[50%] w-[90%] overflow-hidden rounded-sm bg-hlg-red-200 md:top-[38%]"
            } ${dayEvents.length > 1 ? "overflow-y-scroll" : ""}`}
          >
            {dayEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => setPopupEvent(event)}
                className={`${
                  isToday
                    ? "cursor-pointer text-[4px] text-hlg-red-200 md:text-xs"
                    : "cursor-pointer text-[4px] text-white md:text-xs"
                } ${dayEvents.length > 1 ? "border-b-2" : ""}`}
              >
                <div className="p-[3%] pt-[12.5%]">
                  {event.title}{" "}
                  {new Date(event.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="text-md absolute right-[44.25%] top-[5%] z-30 font-archivo-black md:right-[46%] md:text-4xl">
        {currYear}
      </div>
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: captionWeek,
          formatCaption: captionMonth,
        }}
        modifiers={modifiers}
        className={cn(className)}
        classNames={{
          months: "flex flex-col",
          month: "px-[5%] pt-[15%]",
          caption:
            "absolute flex bg-[#1E1E1E] rounded-xl h-[4vw] w-[14vw] top-[15%] md:top-[12%] left-[40.5%] justify-center items-center z-50",
          caption_label: "text-[10px] sm md:text-3xl p-2 font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            "h-[2vw] w-[2vw] bg-transparent p-0 opacity-100 hover:opacity-50",
          ),
          nav_button_previous: "absolute scale-x-[-1] left-[3%]",
          nav_button_next: "absolute right-[3%]",
          table:
            "relative md:static right-[5.5%] w-full rounded-xl bg-hlg-light-gray",
          head_row:
            "flex w-full aspect-[7/1] text-xs md:text-2xl text-center items-center",
          head_cell:
            "text-hlg-red-200 border border-hlg-red-300 font-bold w-full h-full flex items-center justify-center",
          row: "flex w-full mt-0",
          cell: "relative text-center p-0 border border-hlg-red-300",
          day_today: "bg-hlg-red-200 text-white",
          day_outside: "text-white",
          day_disabled: "text-neutral-500 opacity-50",
          day_range_middle:
            "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <IoMdPlay
              onClick={prevDate}
              className="h-[5px] w-[5px] text-white opacity-50 hover:opacity-0 md:h-4 md:w-8"
            />
          ),
          IconRight: () => (
            <IoMdPlay
              onClick={nextDate}
              className="h-[5px] w-[5px] text-white opacity-50 hover:opacity-0 md:h-4 md:w-8"
            />
          ),
          Day: (props) => (
            <CustomDay
              {...props}
              selected={props.date.getTime() === selectedDate?.getTime()}
              onClick={setSelectedDate}
            />
          ),
        }}
        {...props}
      />
      {popupEvent && (
        <Modal
          answer={
            <>
              <div>
                <strong>{popupEvent.title}</strong>
              </div>
              <div>
                <strong>Location:</strong> {popupEvent.location}
              </div>
              <div>
                <strong>Time:</strong>{" "}
                {new Date(popupEvent.startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div>
                <strong>Date:</strong>{" "}
                {new Date(popupEvent.startTime).toLocaleDateString()}
              </div>
              <div>{popupEvent.description || "No description available"}</div>
            </>
          }
          onClose={toggleModal}
        />
      )}
    </div>
  );
}
CalendarEvents.displayName = "Calendar";

export { CalendarEvents };
