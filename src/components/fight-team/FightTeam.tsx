import React from "react";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import coach from "@/public/fight-team/coach.webp";

const FightTeam = () => {
  return (
    <div className="mt-5 flex flex-col md:mt-10 md:gap-10 md:text-2xl">
      <div className="flex justify-center text-base md:justify-start md:text-2xl">
        <div className="border-l-4 md:border-l-0" />
        <Header position="left" title="WHAT IS FIGHT TEAM?" />
      </div>
      <div className="flex text-center md:text-left md:text-2xl">
        <div className="flex w-full flex-col md:flex-row">
          <div className="mt-4 flex w-full items-center justify-center justify-self-center md:hidden">
            <Photo width={"w-1/3"} webp={coach} alt="Coach Israel Salgado" />
          </div>
          <div className="mt-4 hidden w-full items-center justify-center justify-self-center md:order-last md:flex md:size-auto md:items-center">
            <Photo width={"w-2/3"} webp={coach} alt="Coach Israel Salgado" />
          </div>
          <div className="flex flex-col items-center justify-center md:w-3/5">
            <div className="w-4/6">
              <div className="font-anek-tekygu mt-2 flex flex-col text-xs md:text-lg md:font-thin">
                Fight team is UCR's competitive boxing team that is a branch of
                highlander Gloves They have their own training and program
                seperate from the general members of Highlander Gloves. Fight
                team practices throughout the year in preperation for the United
                States intercollegiate boxing association competition (USIBA) in
                the winter. Anyone can join this team and tryouts are held
                throughout the year. For more information ask any of our staff
                during practice. This team is led by Coach Israel and our
                Womens' and Mens' Captains.
              </div>
              <div className="mt-5 flex w-full flex-col justify-items-center justify-self-center font-archivo-narrow text-xs font-medium md:mt-8 md:justify-self-start md:text-lg">
                #2 Men's Team and #3 Women's Team USIBA '24
              </div>
              <div className="flex w-2/3 flex-col justify-self-center font-archivo-narrow text-xs font-medium md:justify-self-start md:text-lg">
                #1 Women's Team USIBA '23
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightTeam;
