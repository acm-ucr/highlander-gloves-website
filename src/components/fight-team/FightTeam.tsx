import React from "react";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import coach from "@/public/fight-team/coach.webp";

const FightTeam = () => {
  return (
    <div>
      <div className="flex flex-col justify-center md:gap-10 md:text-2xl">
        <div className="flex justify-center text-xl md:justify-start md:text-2xl">
          <div className="border-l-4 md:border-l-0"></div>
          <Header position="left" title="WHAT IS FIGHT TEAM?" />
        </div>
        <div className="flex text-center md:text-left md:text-2xl">
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center md:w-3/5">
              <div className="w-4/6">
                <div className="font-anek-tekygu flex flex-col font-thin">
                  Fight team is UCR's competitive boxing team that is a branch
                  of highlander Gloves They have their own training and program
                  seperate from the general members of Highlander Gloves. Fight
                  team practices throughout the year in preperation for the
                  United States intercollegiate boxing association competition
                  (USIBA) in the winter. Anyone can join this team and tryouts
                  are held throughout the year. For more information ask any of
                  our staff during practice. This team is led by Coach Israel
                  and our Womens' and Mens' Captains.
                </div>
                <div className="flex w-2/3 flex-col font-archivo-narrow font-medium md:my-8">
                  #2 Men's Team and #3 Women's Team USIBA '24 #1 Women's Team
                  USIBA 23'
                </div>
              </div>
            </div>
            <div className="flex justify-end md:items-center">
              <Photo width={"w-2/3"} image={coach} alt="Coach Israel Salgado" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightTeam;
