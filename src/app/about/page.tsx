import AboutUs from "@/components/about/AboutUs";
import FAQ from "@/components/about/FAQ";
import Modal from "@/components/about/Modal";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <AboutUs />
      <FAQ />
      <Modal />
    </div>
  );
};

export default page;
