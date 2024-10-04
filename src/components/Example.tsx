const Example = (props: { txt1: string; txt2: string; txt3: string }) => {
  return (
    <div className="flex w-5/6 flex-row gap-3 bg-blue-200 text-3xl">
      <div className="w-1/3 bg-red-200">{props.txt1}</div>
      <div className="w-1/3 bg-red-200">{props.txt2}</div>
      <div className="w-1/3 bg-red-200">{props.txt3}</div>
    </div>
  );
};

export default Example;
