const SubHeader = (props: { txt: string }) => {
  return (
    <div className="bg-black-100 flex w-1/3 flex-col items-center justify-center py-5">
      <h1 className="text-white-600 relative font-archivo-black text-3xl tracking-wider">
        {props.txt}
        <span className="absolute left-[-10%] right-[-10%] h-1 translate-y-10 transform bg-white" />
      </h1>
    </div>
  );
};

export default SubHeader;
