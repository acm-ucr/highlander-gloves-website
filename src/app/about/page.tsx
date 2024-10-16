import AboutUs from "@/components/about/AboutUs";
import FAQs from "@/components/about/FAQs";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <AboutUs />
      <FAQs />
    </div>
  );
};

export default page;
