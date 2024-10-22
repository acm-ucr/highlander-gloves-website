import React from 'react'
import Header from "@/components/Header";
import FAQ from "@/components/about/FAQ"
import faqs from '@/data/FAQ';

const FAQs = () => {
  return (
    <div className="w-full relative">
        <div className="flex text-xl justify-start">
          <div className=""></div>
          <Header position="left" title="FAQs" />
        </div>

      <div className='grid grid-cols-2 m-16'>
        {faqs.map((faq, index) => (
          <FAQ key={index} text={faq.question} />
        ))}
    </div>
        
    </div>
  );
};

export default FAQs;
