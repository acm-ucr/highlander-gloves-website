import AboutUs from "@/components/about/AboutUs";
import FAQs from "@/components/about/FAQs";
import Title from "@/components/Title";
import aboutUs from "@/public/title/aboutUs.webp";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Title image={aboutUs} alt="About Us Header Image" txt="ABOUT US" />
      <AboutUs />
      <FAQs />
    </div>
  );
};

export default page;
