const FormHeader = (props: { txt: string }) => {
  return (
    <div className="flex w-5/6 flex-col items-center rounded-xl bg-hlg-red-200 py-3 font-archivo-black text-3xl md:w-4/6 md:rounded-3xl md:py-6 md:text-6xl lg:w-1/2 lg:py-10 lg:text-7xl">
      {props.txt}
    </div>
  );
};

export default FormHeader;
