const FAQ = (props: { text: string }) => {
  return (
    <div className="align-center m-8 flex aspect-[4/3] w-1/4 flex-col justify-center bg-hlg-red-200 p-8 text-center font-anek-telegu text-xl font-semibold leading-tight text-white shadow-[22px_22px_0px_0px_#441212]">
      {props.text}
    </div>
  );
};

export default FAQ;
