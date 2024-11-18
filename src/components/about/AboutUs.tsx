const AboutUs = () => {
  return (
    <div className="mt-5 flex w-3/4 flex-col items-center justify-center gap-10 text-xs leading-normal md:mt-10 md:text-3xl md:2xl:w-2/3">
      <p className="font-anek-tekygu indent-4 md:indent-16 md:font-archivo-black">
        Welcome to the official boxing club at UCR. We introduce our fellow UCR
        students the fundamentals of the sport of boxing in order to provide not
        only a great workout, but also an environment that will both cultivate
        and enhance positive qualities within each individual.
      </p>
      <p className="font-anek-tekgyu indent-4 leading-normal md:indent-16 md:font-archivo-black">
        To learn more about us don't hesitate to message us or head over to our
        social media accounts @highlandergloves or join our club discord.
      </p>
      <iframe
        src="https://www.youtube.com/embed/0FJPVFd6kgM"
        className="aspect-video w-3/4 rounded border-[3px] shadow-[22px_22px_0px_0px_#441212] md:w-1/2"
      />
    </div>
  );
};

export default AboutUs;
