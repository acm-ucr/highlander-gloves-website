import { FaTimes } from "react-icons/fa";

const Modal = () => {
  return (
    <div className="relative flex w-10/12 justify-center border-4 border-hlg-red-200 bg-hlg-red-300 p-16">
      <div className="absolute right-0 top-0 flex h-20 w-20 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-hlg-red-200 bg-white">
        <FaTimes size={60} className="text-hlg-red-200" />
      </div>
      <p className="ml-6 p-8 font-archivo-narrow text-4xl text-white">
        Practice is located at Raincross Boxing Academy on 2060 Chicago Ave.
        Practice is Mon, Tues, and Thurs from 7:30-9pm and Wednesday from
        8-9:30pm.
      </p>
    </div>
  );
};

export default Modal;
