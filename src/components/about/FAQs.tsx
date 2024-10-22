import React from 'react'
import Header from "@/components/Header";
import FAQ from "@/components/about/FAQ"

const FAQs = () => {
  return (
    <div className="w-full relative">
        <div className="flex text-xl justify-start">
          <div className=""></div>
          <Header position="left" title="FAQs" />
        </div>

        <FAQ text="When and where is practice?"/>
        
    </div>
  );
};

export default FAQs;
