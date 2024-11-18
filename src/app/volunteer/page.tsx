"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import { useState } from "react";
import toast from "react-hot-toast";
import FormHeader from "@/components/home/FormHeader";
import FormButton from "@/components/FormButton";
import logo from "@/public/logo.webp";
import Image from "next/image";

const page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 font-archivo-black text-4xl">
        {/* <FormHeader txt="WAIVER SUBMIITED" /> */}
        <Image src={logo} alt="Logo" className="w-[14%]" />
        Volunteer Form Submitted!
      </div>
    );
  }

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>
      {/* // dont forget to switch link back to the original one not the FAKE volunteer form */}
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white">
        <FormHeader txt="Volunteer Form" />
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScItUJcJ7aH6Iz8eLC0bxpzxbRr4u5trZeou8Uu5z2qLLSRTQ/formResponse"
          onSubmit={() => (window.submitted = true)}
          target="hidden_iframe"
          className="mt-5 w-[45%] space-y-4"
        >
          {/* Name Field */}
          <div>
            <label className="mb-1 block font-archivo-black text-lg font-bold uppercase md:text-2xl lg:text-3xl">
              Name (First, Last)*
            </label>
            {/* entry num is in div jsmodel= section in the list w/ nulls and stuff */}
            <input
              name="entry.1312508132"
              type="text"
              placeholder="YOUR NAME"
              className="text-md w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-white focus:outline-none md:text-xl"
              required
            />
          </div>
          {/* NET ID */}
          <div>
            <label className="mb-1 block font-archivo-black text-lg font-bold uppercase md:text-2xl lg:text-3xl">
              UCR NetID (Email ID)*
            </label>
            <input
              name="entry.73966464"
              type="text"
              placeholder="YOUR NET ID"
              className="text-md w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-white focus:outline-none md:text-xl"
              required
            />
          </div>
          {/* Contact Info */}
          <div>
            <label className="mb-1 block font-archivo-black text-lg font-bold uppercase md:text-2xl lg:text-3xl">
              Contact Information*
              <div className="text-base text-hlg-light-gray">
                (Specify email, phone #, or Discord username, e.g. "Email:
                jdoe001@ucr.edu")
              </div>
            </label>
            <input
              name="entry.473485132"
              type="text"
              placeholder="YOUR CONTACT INFO"
              className="text-md w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-white focus:outline-none md:text-xl"
              required
            />
          </div>
          {/* Transportation Method */}
          <div>
            <label className="mb-1 block font-archivo-black text-lg font-bold uppercase md:text-2xl lg:text-3xl">
              Do you have a way to get to RBA?*
            </label>
            {/* first option */}
            <div className="flex hover:bg-gray-700">
              <input
                name="entry.111141012"
                type="radio"
                id="yess"
                placeholder="option1"
                className="h-[10] w-4 border-x-hlg-red-300"
                required
              />
              <label
                htmlFor="yess"
                className="block w-full p-2 font-archivo-black text-sm text-white md:text-lg"
              >
                Yes, and I'd be willing to help shuttle others
              </label>
            </div>
            {/* second option */}
            <div className="flex hover:bg-gray-700">
              <input
                name="entry.111141012"
                type="radio"
                id="yes"
                placeholder="option2"
                className="h-[10] w-4 border-x-hlg-red-300"
                required
              />
              <label
                htmlFor="yes"
                className="block w-full p-2 font-archivo-black text-sm text-white md:text-lg"
              >
                Yes, but I can't shuttle others
              </label>
            </div>
            {/* third option */}
            <div className="flex hover:bg-gray-700">
              <input
                name="entry.111141012"
                type="radio"
                id="no"
                placeholder="option3"
                className="h-[10] w-4 border-x-hlg-red-300"
                required
              />
              <label
                htmlFor="no"
                className="block w-full p-2 font-archivo-black text-sm text-white md:text-lg"
              >
                No
              </label>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="mb-1 block font-archivo-black text-lg font-bold uppercase md:text-2xl lg:text-3xl">
              Which day THIS WEEK would you like to volunteer?*
              <div className="text-base text-hlg-light-gray">
                (for multiple days in the same week, fill out the form for each
                day)
              </div>
            </label>
            <input
              name="entry.1951360927"
              type="date"
              placeholder="date"
              className="text-md w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-white focus:outline-none md:text-xl"
              required
            />
          </div>
          <FormButton txt="SUBMIT" />
        </form>
      </div>
    </>
  );
};

export default page;
