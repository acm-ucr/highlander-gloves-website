import React from 'react'
import Header from "@/components/Header";

const FAQs = () => {
  return (
    <div className="w-full relative">
        <div className="flex text-xl justify-start">
          <div className=""></div>
          <Header position="left" title="FAQs" />
        </div>

        <div className='bg-hlg-red-200 w-2/5 h-96 shadow-[22px_30px_0px_0px_#441212] flex justify-center items-center text-4xl font-archivo-black text-center'>
          When and where is practice?</div>
        
    </div>
  );
};

export default FAQs;
