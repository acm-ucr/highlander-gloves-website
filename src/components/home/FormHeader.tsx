const FormHeader = (props: { txt: string }) => {
  return (
    <div className="flex w-1/2 flex-col items-center rounded-3xl bg-hlg-red-200 py-10 font-archivo-black text-7xl">
      {props.txt}
    </div>
  );
};

export default FormHeader;
