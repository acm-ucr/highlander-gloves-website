"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/about/FAQ";
import faqs from "@/data/Faq";
import Modal from "@/components/about/Modal";

type faq = {
  question: string;
  answer: string | string[];
  delay: number;
};

const FAQs = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<faq | null>(null);

  const handleFAQClick = (faqinfo: faq) => {
    setSelectedFAQ(faqinfo);
  };

  const toggleModal = () => {
    setSelectedFAQ(null);
  };

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
          <FAQ
            key={index}
            text={faq.question}
            onClick={() => handleFAQClick(faq)}
            delay={faq.delay}
          />
        ))}
      </div>

      {selectedFAQ && (
        <Modal answer={selectedFAQ.answer} onClose={toggleModal} />
      )}
    </div>
  );
};

export default FAQs;
