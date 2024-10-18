const SubHeader = (props: { txt: string }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="font-archivo-black text-3xl tracking-wider text-white">
        {props.txt}
      </div>
      <div className="h-1.5 w-1/3 bg-white" />
    </div>
  );
};

export default SubHeader;
