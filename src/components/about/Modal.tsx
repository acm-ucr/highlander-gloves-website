import { FaTimes } from "react-icons/fa";

type ModalProps = {
  answer: string | string[];
  onClose: () => void;
};

const Modal = ({ answer, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-70">
      <div className="absolute top-1/3 mx-8 border-4 border-hlg-red-200 bg-hlg-red-300 p-12 md:mx-12 md:p-24 lg:mx-24 xl:mx-72">
        <div
          className="absolute right-0 top-0 flex h-20 w-20 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-hlg-red-200 bg-white"
          onClick={onClose}
        >
          <FaTimes size={60} className="text-hlg-red-200" />
        </div>
        <p className="ml-2 p-4 text-center font-archivo-narrow text-2xl text-white md:text-3xl lg:text-4xl">
          <p>{Array.isArray(answer) ? answer.join("\n") : answer}</p>
        </p>
      </div>
    </div>
  );
};

export default Modal;
