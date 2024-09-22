import Calendar from "@/components/events/caledar/Calendar";
import Events from "@/components/events/Events";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <Events />
      <Calendar />
    </div>
  );
};

export default page;
