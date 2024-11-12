const FormButton = (props: { txt: string }) => {
  return (
    <input
      type="submit"
      value={props.txt}
      className="hover: m-auto box-border flex cursor-pointer items-center justify-center rounded-full border-[5px] border-hlg-red-300 bg-hlg-red-200 px-12 py-2 font-archivo-black text-3xl text-white transition-transform duration-300 hover:-translate-y-1"
    />
  );
};

export default FormButton;
