const FAQ = (props: { text: string; onClick: () => void }) => {
  return (
    <div
      className={`md:align-center m-4 my-6 flex flex-row justify-center bg-hlg-red-200 p-8 text-center font-archivo-black text-base font-semibold leading-tight text-white shadow-[22px_22px_0px_0px_#441212] md:m-8 md:aspect-[4/3] md:flex-col md:text-3xl lg:text-4xl xl:text-5xl`}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default FAQ;
