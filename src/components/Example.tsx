const Example = (props: { txt1: string; txt2: string; txt3: string }) => {
  return (
    <div className="flex w-5/6 flex-row items-stretch gap-3 bg-blue-200 p-8 text-3xl">
      <div className="w-1/3 bg-red-200 text-center">{props.txt1}</div>
      <div className="w-1/3 bg-red-200 text-center">{props.txt2}</div>
      <div className="w-1/3 bg-red-200 text-center">{props.txt3}</div>
    </div>
  );
};

export default Example;
