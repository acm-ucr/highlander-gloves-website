import Header from "@/components/Header";
import Button from "@/components/Button";

const WhyVolunteer = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="flex w-full justify-start">
        <Header position="left" title="WHY SHOULD I VOLUNTEER?" />
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl text-left font-anek-telegu text-3xl">
        <p className="mb-20">
          In order to become a fully fledged member of Highlander Gloves, you
          will need to volunteer at least twice. Furthermore, volunteering with
          us at RBA is a great thing to include on your resume, an amazing way
          to give back to the community, and most importantly, is a whole lot of
          fun!
        </p>
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl text-center font-anek-telegu text-3xl">
        <p className="mb-16 text-center">
          <b>Don’t have a ride?</b> No worries! We can help arrange a ride for
          you whenever possible. Just ask a staff member or reach out to us via
          Instagram or Discord for help, and we'll get you situated.
          Volunteering is located at the same place as our practices, 2060
          Chicago Ave.
        </p>
        <p className="mb-6 text-center text-2xl italic">
          For any issues, please reach out to a staff member.
        </p>

        <div className="mt-8 flex w-full justify-center">
          <Button txt="SIGN UP" link="/signup" />
        </div>
      </div>
    </div>
  );
};

export default WhyVolunteer;
