import React from "react";
import Header from "@/components/Header";
import FAQ from "@/components/about/FAQ";
import faqs from "@/data/Faq";

const FAQs = () => {
  return (
    <div className="relative w-full">
      <div className="hidden justify-center md:flex md:justify-start md:text-xl">
        <Header position="left" title="FAQs" />
      </div>
      <div className="flex justify-center md:hidden">
        <div className="border-b-4 px-[30%] py-4 font-archivo-black text-2xl">
          FAQS
        </div>
      </div>

      <div className="m-[10%] grid md:m-16 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} text={faq.question} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
