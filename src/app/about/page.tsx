import AboutUs from "@/components/about/AboutUs";
import FAQ from "@/components/about/FAQ";

const page = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default page;