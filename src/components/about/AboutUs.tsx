const AboutUs = () => {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center gap-10 text-3xl 2xl:w-2/3">
      <p className="indent-16 font-archivo-black">
        Welcome to the official boxing club at UCR. We introduce our fellow UCR
        students the fundamentals of the sport of boxing in order to provide not
        only a great workout, but also an environment that will both cultivate
        and enhance positive qualities within each individual.
      </p>
      <p className="indent-16 font-archivo-black">
        To learn more about us don't hesitate to message us or head over to our
        social media accounts @highlandergloves or join our club discord.
      </p>
      <iframe
        src="https://www.youtube.com/embed/0FJPVFd6kgM"
        className="aspect-video w-1/2 shadow-[15px_15px_0px_0px_#441212]"
      />
    </div>
  );
};

export default AboutUs;
