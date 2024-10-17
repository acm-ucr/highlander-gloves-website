const SubHeader = (props: { txt: string }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="text-white font-archivo-black text-3xl tracking-wider">
        {props.txt}
      </div>
      <div className="w-1/3 h-1.5 bg-white" />
    </div>
  );
};

export default SubHeader;
