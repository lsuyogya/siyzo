import React from "react";

const FeatureBox = ({
  children,
  txt,
  title,
}: {
  children: React.ReactNode;
  txt: string;
  title: string;
}) => {
  return (
    <div className="grid gap-3 grid-cols-[2.75rem_1fr]">
      {children}
      <div className="">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className=" text-gray-400">{txt}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
