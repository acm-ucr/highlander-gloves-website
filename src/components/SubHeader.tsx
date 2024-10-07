import React from "react";

const SubHeader = (props: { position: string; title: string }) => {
  return (
    <div
      className={`w-1/8 flex flex-row border-b-4 border-t-4 border-white p-2 pl-[5%] pr-[5%] text-3xl text-white ${props.position === "left" ? "border-r-4" : "border-l-4"}`}
    >
      {props.title}
    </div>
  );
};

export default SubHeader;


// const SubHeader = () => {
//   return <div>SubHeader</div>;
// };

// export default SubHeader;
