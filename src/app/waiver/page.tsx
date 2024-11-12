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

const Page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 font-archivo-black text-4xl">
        {/* <FormHeader txt="WAIVER SUBMIITED" /> */}
        <Image src={logo} alt="Logo" className="w-[14%]" />
        Waiver Submitted
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
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-white">
        <FormHeader txt="WAIVER" />
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfS4aJMDkT38HO6gdTpiS6ucxbZ84SJOMWLGQGbCBbxQ9BlsA/formResponse"
          onSubmit={() => (window.submitted = true)}
          target="hidden_iframe"
          className="mt-5 w-[45%] space-y-4"
        >
          {/* Name Field */}
          <div>
            <label className="mb-1 block font-archivo-black text-3xl font-bold uppercase">
              Boxer Name*
            </label>
            <input
              name="entry.431336764"
              type="text"
              placeholder="Your Name"
              className="w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-xl text-white focus:outline-none"
              required
            />
          </div>

          {/* Net ID Field */}
          <div>
            <label className="mb-1 block font-archivo-black text-3xl font-bold uppercase">
              What is your NetID (ex: JDoe123)*
            </label>
            <input
              name="entry.494196135"
              type="text"
              placeholder="Your Net ID"
              className="w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-xl text-white focus:outline-none"
              required
            />
          </div>

          {/* Emergency Contact Field */}
          <div>
            <label className="mb-1 block font-archivo-black text-3xl font-bold uppercase">
              Emergency Contact Name and Phone number*
            </label>
            <input
              name="entry.2143124600"
              type="text"
              placeholder="Your Emergency Contact"
              className="mb-10 w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-xl text-white focus:outline-none"
              required
            />
          </div>

          {/* Terms and Agreements */}
          <div className="mt-5 font-archivo-narrow text-2xl">
            <p className="font-bold">Before you box- Go to the front desk:</p>
            <ul className="text-xl">
              <li>- Sign in upon entrance</li>
              <li>- Check in.out any borrowed gear</li>
              <li>
                - Direct parents/guests to the observation area. -Parents/Guests
                are not allowed on the boxing floor. NO coaching may be done by
                the observation area.
              </li>
            </ul>
            <p className="mt-2 font-bold">
              Before you box- Go to the front desk:
            </p>
            <ul className="text-xl">
              <li>- Shirts must be worn on the gym floor at all times.</li>
              <li>- No cursing or foul language on the premises</li>
              <li>
                - Repsect the property of thers. Turn in anything that isn't
                yours.
              </li>
              <li>
                - No food allowed on the boxing floor. Please dispose of water
                bottles in the trash bins.
              </li>
              <li>
                - No sparring allowed without the permission/supervision of
                management
              </li>
              <li>
                - Report to management any medical conditons, use of any
                medications, or any suddent pain/discomfort
              </li>
              <li>
                - No excessive cell phone use or mingling with friends. You are
                here to TRAIN.
              </li>
            </ul>
            <p className="mt-2 font-bold">Ethics and Dicipline</p>
            <ul className="text-xl">
              <li>
                - Do not use your newly acquired skills outside of the gym. We
                are not here to teach you to harm others.
              </li>
              <li>
                - Lead a healthy and happy life. Make smart choices in your diet
                as well as personal life. Be smart and Safe.
              </li>
              <li>
                - School Before Sports. As part of your membership, we ask that
                you abide by the policy of the tutors.
              </li>
            </ul>
            <p className="mt-2 font-bold">Infractions</p>
            <ul className="text-xl">
              <li>
                - All Students are expected to abide by the rules within
                tutoring and training.
              </li>
              <li>
                - The highest level of respect is expected to be shown to all
                staff members and volunteers
              </li>
              <li>
                - Bullying is not tolerated whatsoever and can result in
                immediate suspension and/or removal from the program
              </li>
              <li>
                - Disregard for equipmentand property will result in loss of
                training privledges and possible further action
              </li>
              <li>
                - All needed disciplinary action will be taken at the discretion
                of RBA staff.
              </li>
            </ul>
          </div>

          {/* Certification Checkbox */}
          <div className="mt-4 flex items-center">
            <input
              name="entry.1587376006"
              type="checkbox"
              value="I certify that I have read and understand the rules and regulations"
              id="certify1"
              className="mr-5 h-7 w-7 border-4 border-white hover:cursor-pointer"
              required
            />
            <label htmlFor="certify1" className="font-archivo-narrow text-2xl">
              I certify that I have read and understand the rules and
              regulations*
            </label>
          </div>

          <div className="mt-5 font-archivo-narrow text-2xl">
            <p className="font-bold">Waiver of Liability</p>
            <ul className="text-xl">
              <li>
                ~ I (we), individually (or as Parent/Guardian(s) if applicable),
                understand and apprecite that participation in sports carries a
                risk to the participant of serious injury, including permanent
                paralysis or death. I (we) voluntanly and knowingly recognizr,
                accept, and assume this risk.
              </li>
              <li>
                ~ I (We) agree to abide by the rules of RAINCROSS BOXING
                ACADEMY. I (We) fully understand that I (we) assume all
                responsibility for any injury that may incur in this boxing
                facility. I (We) understand and agree that medical or other
                services rendered to myself/youth by or at the instance of any
                of the named parties is not an admission of liability to provide
                or continue to provide any such services and is not a waiver by
                any of said parties of any right or rights hereunder.{" "}
              </li>
              <li>
                ~ I (We) certify there has not been any injury to his/her hands,
                consisting of fractures or borken bones, or injuries to his
                head, including, but not limited to, concussions within (3)
                months preceeding the date of this consent form, that I/Youth
                has been seen by his/her physiciain and deemed to be in good
                health, and I (we) know of no other injuries that has been
                sustained which may occur in this boxing facillity.{" "}
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-center">
            <input
              name="entry.2032807016"
              value="I certify I have read and understand the Waiver of Liability"
              type="checkbox"
              id="certify2"
              className="mr-5 h-7 w-7 border-4 border-white hover:cursor-pointer"
              required
            />
            <label htmlFor="certify2" className="font-archivo-narrow text-2xl">
              I certify I have read and understand the Waiver of Liability*
            </label>
          </div>

          <div className="mt-5 font-archivo-narrow text-xl">
            I (we) (or as the Parent/Guardian of the applicant) , hereby consent
            to the membership of said applicant at RAINCROSS BOXING ACADEMY, to
            which this form applies and for myself (oursleves) , my (our) heirs,
            executors, administrators, and assigns waive and release any and all
            right to claim for damages I (we) may or might have against
            RAINCROSS BOXING ACADEMY, University of California, Riverside,
            Riverside Police Department, and any other member, coach, tutor, or
            guest of the RAINCROSS BOXING ACADEMY
          </div>

          <div className="mt-4 flex items-center">
            <input
              name="entry.714782603"
              value="I certify I have read and understand the Waiver"
              type="checkbox"
              id="certify3"
              className="mr-5 h-7 w-7 border-4 border-white text-hlg-dark-gray hover:cursor-pointer"
              required
            />
            <label htmlFor="certify3" className="font-archivo-narrow text-2xl">
              I certify I have read and understand the Waiver*
            </label>
          </div>

          {/* Signature Field */}
          <div className="mt-4">
            <label className="mb-1 mt-[10%] block font-archivo-black text-3xl font-bold uppercase">
              Signature (or Parent/Guardian Signature)*
            </label>
            <p className="ml-2 font-archivo-narrow text-2xl">
              By typing your name in the space below, you agree to the rules and
              conditions above.
            </p>
            <input
              name="entry.837808459"
              type="text"
              placeholder="Your Signature"
              className="w-full border-b bg-hlg-dark-gray p-2 font-archivo-black text-xl text-white focus:outline-none"
              required
            />
          </div>
          <FormButton txt="SUBMIT" />
        </form>
      </div>
    </>
  );
};

export default Page;
