"use client";
import Image from "next/image";
import banner from "@/public/title/upcomingEvents.webp";
import image1 from "@/public/news/NewsCorey.webp";
import image2 from "@/public/news/NewsMcCreary.webp";
import image3 from "@/public/news/NewsPerez.webp";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const bannerRef = useRef(null);
  const isBannerInView = useInView(bannerRef, { once: true });

  const section1Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true });

  const section2Ref = useRef(null);
  const isSection2InView = useInView(section2Ref, { once: true });

  const section3Ref = useRef(null);
  const isSection3InView = useInView(section3Ref, { once: true });

  const section4Ref = useRef(null);
  const isSection4InView = useInView(section4Ref, { once: true });

  return (
    <div>
      {/* banner */}
      <div className="relative flex flex-row text-xs md:text-3xl">
        <div
          ref={bannerRef}
          className="font-archivo absolute bottom-[18%] left-[5%] flex flex-col md:bottom-[10%]"
        >
          <motion.div
            className="font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Knocking out the competition one punch at a time
          </motion.div>

          <motion.div
            className="text-[10px] italic md:py-3 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Highlander Gloves holds aspirations for winning a title at
            Nationals.
          </motion.div>
          <motion.div
            className="text-[10px] md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isBannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            By Mamata Elangovan - March 12, 2024
          </motion.div>
        </div>
        <div className="absolute bottom-[5%] left-[48%] md:hidden">
          <div className="border-l-[7px] border-r-[7px] border-t-[5px] border-l-transparent border-r-transparent" />
        </div>
        <Image className="w-screen" src={banner} alt="News" />
      </div>

      {/* section 1 */}
      <div
        className="mx-[8%] my-5 flex flex-col md:mx-[12%] md:my-10"
        ref={section1Ref}
      >
        <motion.div
          className="flex justify-center justify-items-center text-[10px] md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          The University of California, Riverside’s (UCR), Highlander Gloves, a
          boxing club, has achieved success in national competitions, including
          the women winning the United States Intercollegiate Boxing Association
          (USIBA) Team Championship last year. Not only that, through their
          partnership with the Riverside Police Foundation, they assist at the
          Raincross Boxing Academy, offering free boxing lessons and tutoring to
          the local youth. Creating a partnership with the community that gives
          back to the next generation and also helps develop club members.
        </motion.div>

        <Image
          src={image1}
          alt="Joab Corey punching boxing bag"
          className="pt-5 md:pt-10"
        />

        <motion.p
          className="flex justify-center justify-items-center pt-2 text-[8px] italic md:justify-start md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Joab Corey Coaching Gloves Member
        </motion.p>

        {/* section 2 */}
        <div
          className="flex flex-col justify-center justify-items-center gap-3 pt-5 text-[10px] md:gap-6 md:pt-8 md:text-base"
          ref={section2Ref}
        >
          <motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Economics Associate Professor Joab Corey, coach and faculty advisor
            of Highlander Gloves since 2017, shared how in the 2022-2023 season
            at the USIBA hosted tournament, the National Championship
            tournament, the women’s team finished first and men’s team finished
            fifth. This year the team holds aspirations “that both teams can
            finish as high as first in the country.”
          </motion.p>

          <motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            This quarter, the team assembles six days a week for an intense
            ten-week training camp. They practice Monday through Thursday in the
            evening, and on the weekends as the sun rises from 6:30 a.m. to 8:30
            a.m. The boxers undergo demanding training sessions which involve
            intense cardio for warmups, calisthenics, conditioning and a lot of
            bag work. Preparation for the season includes a few sparring
            sessions, where the team goes out to box against other teams like at
            the California State University, Northridge (CSUN), University of
            California, Irvine (UCI) and University of Southern California
            (USC).
          </motion.p>

          <motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The tournament is a significant goal for the team. This year’s USIBA
            tournament is hosted at Houston, Texas and is the team’s moment to
            shine. Corey explains how for many people this is the first time
            they are going to a tournament and how it will be one of the
            “highlights of their college career outside the classroom” as one of
            the defining moments of their life.
          </motion.p>

          <motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Team Captain, Carlos Rivera, has been boxing with the university
            team for two years. Right now he aims to set an example for his
            fellow teammates, bettering not only those around him, but also
            himself. Creating a conducive environment for unity and teamwork,
            the figure he maintains is one where he lets them know that “it’s
            okay to ask me for advice and to try to help them do as much as you
            can.”
          </motion.p>
        </div>

        {/* section 3 */}
        <div className="flex-row justify-center justify-items-center md:flex">
          <Image
            src={image2}
            alt="Rian McCreary holding a championship belt"
            className="py-8 md:size-1/2 md:pt-12"
          />
          <div className="flex flex-col justify-center gap-6 text-[10px] md:ml-8 md:text-base" ref={section3Ref}>
            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                The Fight Team Captain, Rian McCreary, has also been boxing at the
                university for about two years now. To prepare for the tournament
                she has been staying behind after practice to do extra drills and
                build up her strength. Last year was McCreary’s first time
                competing at the USIBA tournament, and she got three fights out of
                the tournament. However, in her last match, she lost by split
                decision, with the judges unable to come to a consensus for who
                had actually won the match. This year McCreary is in the same
                weight class as the girl she had lost the match against and looks
                forward to a rematch.
              </motion.p>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At the tournament last year, Rivera comments that he feels as if
              it went well. This year, putting aside his anxiety and
              nervousness, he is prepared to really focus on his matches. During
              practice he has been reflecting on his previous sparring sessions,
              taking apart his motions, figuring out what worked and what does
              not work and is working on getting better with each day.
            </motion.p>
          </div>

        </div>
        <div className="flex-row justify-center justify-items-center md:flex">
          <Image
            src={image3}
            alt="Benjamin Perez holding a championship belt"
            className="flex py-8 md:order-2 md:size-1/3 md:py-0"
          />

          {/* section 4 */}
          <div className="flex flex-col justify-center gap-6 text-[10px] md:order-1 md:mr-8 md:text-base" ref={section4Ref}>
          <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Highlander Gloves President, Benjamin Perez is pumped up for
              his redemption arc at the tournament this year. This year he is
              looking forward to dominating his matches, putting in a lot of
              time and effort to make up for last year’s tournament.
            </motion.p>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The community built at Highlander Gloves is truly a special one
              that encourages everyone to support one another and improve. Their
              practices are full of support and exceptional effort. Perez
              reflects on how at the start the team did not really know each
              other well, but now they have “found community.” He has watched
              them “before and after practices, talking, having a good time,
              making friends.” Through their shared time the club has instilled
              within it a sense of camaraderie and respect.
            </motion.p>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Corey holds high hopes for the team, “the thing about this group
              is that they have to give back to the community to be part of this
              club. So you have good people, doing good things for the
              community, who are also full-time students who have made a
              commitment to represent a university at this championship
              tournament, and are really pushing themselves to do it in the best
              possible way. I’m very proud of it.”
            </motion.p>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              This year Highlander Gloves looks like it is off to a great
              competition season. The team is pumped and hopes are high. This
              tight-knit community has put in the hours, constantly pushing each
              other to exceed boundaries and now they aim to bring back
              championship belts.
            </motion.p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-row justify-center gap-2 pb-4 text-[6px] md:pb-10 md:text-base">
        <p className="font-bold">The Highlander News Article:</p>
        <Link
          href="https://www.highlandernews.org/89758/knocking-out-the-competition-one-punch-at-a-time/"
          className="underline"
        >
          https://www.highlandernews.org/89758/knocking-out-the-competition-one-punch-at-a-time/
        </Link>
      </div>
    </div>
  );
};
export default page;
