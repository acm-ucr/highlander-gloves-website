import React from "react";
import Header from "@/components/Header";
import FAQ from "@/components/about/FAQ";
import faqs from "@/data/Faq";

const FAQs = () => {
  return (
    <div className="relative w-full">
      <div className="flex justify-start text-xl">
        <Header position="left" title="FAQs" />
      </div>

      <div className="m-16 grid grid-cols-2">
        {faqs.map((faq, index) => (
          <FAQ key={index} text={faq.question} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
