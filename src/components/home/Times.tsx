import Header from "@/components/Header";

const Times = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-12">
      <div className="flex justify-end">
        <Header position="right" title="TIMES" />
      </div>
      <div className="flex w-full flex-col justify-end pr-16 font-anek-telegu">
        <p className="pb-6 text-right">
          Tuesdays: 4:00 pm - 6:00 pm <br />
          Wednesdays: 4:00 pm - 6:00 pm <br />
          Thursdays: 4:30 pm - 6:30 pm <br />
        </p>
        <p className="text-right text-2xl">
          (P.S. Thursdays will consist of only boxing, so more <br />
          experienced members, this is your time to shine!)
        </p>
      </div>
    </div>
  );
};

export default Times;
