const AboutUs = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-3xl">
      AboutUs
      <p className="max-w-4xl py-10 indent-16 font-archivo-black">
        Welcome to the official boxing club at UCR. We introduce our fellow UCR
        students the fundamentals of the sport of boxing in order to provide not
        only a great workout, but also an environment that will both cultivate
        and enhance positive qualities within each individual.
      </p>
      <p className="max-w-4xl pb-20 indent-16 font-archivo-black">
        To learn more about us don't hesitate to message us or head over to our
        social media accounts @highlandergloves or join our club discord.
      </p>
      <div className="flex justify-center pb-10">
        <div className="h-[360px] w-[580px] translate-x-[35px] translate-y-[45px] bg-hlg-red-300"></div>
        <div className="absolute">
          <iframe
            width="600"
            height="380"
            src="https://www.youtube.com/embed/0FJPVFd6kgM"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
