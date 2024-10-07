import React from "react";
import SubHeader from "@/components/SubHeader";

const Example = (props: { txt1: string }) => {
  return (
    <div className="flex w-full flex-col gap-3 text-3xl">
      {/* change to justify-end when positioning to right */}
      <div className="flex w-full justify-start">
        <SubHeader position="left" title={props.txt1} />
      </div>
    </div>
  );
};

const GetStarted = () => {
  return (
    <div className="flex w-full flex-row justify-center text-3xl">
      <Example txt1="HOW TO GET STARTED" />
    </div>
  );
};

export default GetStarted;
