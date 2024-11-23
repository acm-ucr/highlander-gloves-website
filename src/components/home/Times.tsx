import Header from "@/components/Header";

const Times = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 sm:items-end sm:gap-12">
      <div className="flex w-full justify-center md:hidden">
        <Header position="middle" title="&emsp; TIMES &emsp;" />
      </div>
      <div className="hidden w-full justify-end md:flex">
        <Header position="right" title="&emsp; TIMES &emsp;" />
      </div>
      <div className="flex w-11/12 flex-col justify-end font-anek-telegu sm:w-full sm:pr-11">
        <p className="pb-6 text-center text-lg sm:text-right sm:text-3xl">
          Tuesdays: 4:00 pm - 6:00 pm <br />
          Wednesdays: 4:00 pm - 6:00 pm <br />
          Thursdays: 5:00 pm - 6:30 pm <br />
        </p>
        <p className="text-center text-sm sm:text-right sm:text-2xl">
          (P.S. Thursdays will consist of only boxing, so more experienced
          members, this is your time to shine!)
        </p>
      </div>
    </div>
  );
};

export default Times;
