import Calendar from "@/components/events/caledar/Calendar";
import Events from "@/components/events/Events";
import Title from "@/components/Title";
import upcomingEvents from "@/public/title/upcomingEvents.webp";
const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <Title
        webp={upcomingEvents}
        txt="UPCOMING EVENTS"
        alt="Upcoming Events Banner"
      />
      <Events />
      <Calendar />
    </div>
  );
};

export default page;
