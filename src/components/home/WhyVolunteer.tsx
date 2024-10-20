import Header from "@/components/Header";
import Button from "@/components/Button";

const WhyVolunteer = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start md:items-center">
      <div className="flex w-full justify-center md:justify-start">
        <Header position="left" title="WHY SHOULD I VOLUNTEER?" />
      </div>

      <div className="text-l mx-4 mb-4 mt-12 text-center font-anek-telegu md:mx-32 md:text-2xl lg:text-3xl">
        <p className="mb-2">
          In order to become a fully fledged member of Highlander Gloves, you
          will need to volunteer at least twice. Furthermore, volunteering with
          us at RBA is a great thing to include on your resume, an amazing way
          to give back to the community, and most importantly, is a whole lot of
          fun!
        </p>
      </div>

      <div className="text-l mx-4 mb-4 mt-4 text-center font-anek-telegu md:mx-32 md:text-2xl lg:text-3xl">
        <p className="mb-5">
          <b>Don’t have a ride?</b> No worries! We can help arrange a ride for
          you whenever possible. Just ask a staff member or reach out to us via
          Instagram or Discord for help, and we'll get you situated.
          Volunteering is located at the same place as our practices, 2060
          Chicago Ave.
        </p>
        <p className="text-center text-xs text-gray-400 md:text-lg lg:text-2xl">
          For any issues, please reach out to a staff member.
        </p>

        <div className="mt-4 flex w-full justify-center">
          <Button txt="SIGN UP" link="/volunteer" />
        </div>
      </div>
    </div>
  );
};

export default WhyVolunteer;
