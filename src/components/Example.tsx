const Example = (props: { txt1: string; txt2: string; txt3: string }) => {
  return (
    <div className="flex w-5/6 flex-row gap-3 bg-blue-200 p-6 text-3xl">
      <div className="flex w-1/3 justify-center bg-red-200 p-0.5">
        {props.txt1}
      </div>
      <div className="flex w-1/3 justify-center bg-red-200 p-0.5">
        {props.txt2}
      </div>
      <div className="flex w-1/3 justify-center bg-red-200 p-0.5">
        {props.txt3}
      </div>
    </div>
  );
};

export default Example;
