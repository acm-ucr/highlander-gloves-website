import { FaTimes } from "react-icons/fa";

type ModalProps = {
  answer: string | string[];
  onClose: () => void;
};

const Modal = ({ answer, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-40 -translate-x-8 bg-black bg-opacity-70 md:translate-x-0">
      <div className="absolute top-1/3 mx-20 border-4 border-hlg-red-200 bg-hlg-red-300 p-12 md:mx-12 md:p-24 lg:mx-24 xl:mx-72">
        <div
          className="absolute right-0 top-0 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-hlg-red-200 bg-white md:h-20 md:w-20"
          onClick={onClose}
        >
          <FaTimes className="size-7 text-hlg-red-200 md:size-12" />
        </div>
        <p className="ml-2 text-center font-archivo-narrow text-lg text-white md:p-4 md:text-3xl lg:text-4xl">
          <p>{Array.isArray(answer) ? answer.join("\n") : answer}</p>
        </p>
      </div>
    </div>
  );
};

export default Modal;
