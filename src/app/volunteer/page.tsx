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
import Image from "next/webp";
import Link from "next/link";

const page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 font-archivo-black text-4xl">
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
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 p-4 font-archivo-narrow text-white">
        <FormHeader txt="Volunteer Form" />
        <div className="mt-5 w-2/4 text-2xl font-bold">
          What do we do while volunteering?
        </div>
        <div className="px-[25%]">
          Highlander Gloves is partnered with Riverside PD to help tutor at-risk
          kids around the area, while also coaching them in boxing. As a
          volunteer, you'll usually be helping clean the facility, tutoring
          kids, and helping run boxing drills. Even if you have little to no
          experience, we'll show you the ropes, so please feel free to show up!
          We'd love all the help we can get!
        </div>
        <div className="w-2/4 text-2xl font-bold">
          What if I don't have a ride?
        </div>
        <div className="px-[25%]">
          No worries! We can help arrange a ride for you whenever possible. Just
          ask a staff member on discord for help, and we'll get you situated.
        </div>
        <div className="w-2/4 text-2xl font-bold">Times:</div>
        <div className="w-2/4">
          Tuesdays: 4:00 pm - 6:00 pm <br />
          Wednesdays: 4:00 pm - 6:00 pm
          <br />
          Thursdays: 5:00 pm - 6:30 pm <br />
          (P.S. Thursdays will consist of only boxing, so more experienced
          members, this is your time to shine!)
        </div>
        <div className="w-2/4 text-2xl font-bold">Why should I volunteer?</div>
        <div className="px-[25%]">
          In order to become a fully fledged member of Highlander Gloves, you
          will need to volunteer at least twice. Furthermore, volunteering with
          us at RBA is a great thing to include on your resume, an amazing way
          to give back to the community, and most importantly, is a whole lot of
          fun!
        </div>
        <div className="w-2/4 text-2xl font-bold">Requirements:</div>
        <div className="px-[25%] pb-4">
          In order to volunteer, RBA mandates that you complete the following SA
          course, as well as fill out the following Volunteer Application Form.
          Please fill out the form once you've earned your certificate from the
          SA course, and send a digital copy of your certificate as well as a
          digital scan of the filled out application to the following google
          form:
        </div>
        <div className="px-[25%]">
          SA Course:
          <Link
            href="https://sexual-harassment-prevention-training.calcivilrights.ca.gov/NonSupervisoryEnglish/story.html"
            className="text-blue-400 hover:text-blue-500"
          >
            {" "}
            https://sexual-harassment-prevention-training.calcivilrights.ca.gov/NonSupervisoryEnglish/story.html
          </Link>
          <br />
          Volunteer Application Form:
          <Link
            href="https://drive.google.com/file/d/1YhRfyr34C5Cyzk_Lezwqsr-LDB9S-zb0/view?usp=sharing"
            className="text-blue-400 hover:text-blue-500"
          >
            {" "}
            https://drive.google.com/file/d/1YhRfyr34C5Cyzk_Lezwqsr-LDB9S-zb0/view?usp=sharing
          </Link>
          <br />
          Certificate/Application Submission Form:
          <Link
            href="https://forms.gle/pV145wZrLtrqWnth7"
            className="text-blue-400 hover:text-blue-500"
          >
            {" "}
            https://forms.gle/pV145wZrLtrqWnth7
          </Link>
        </div>

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
                id="shuttle"
                placeholder="option1"
                className="h-[10] w-4 border-x-hlg-red-300"
                required
              />
              <label
                htmlFor="shuttle"
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
