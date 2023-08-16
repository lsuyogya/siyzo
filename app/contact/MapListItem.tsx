import React from "react";

const MapListItem = ({
  children,
  title,
  details,
}: {
  children: React.ReactNode;
  title: string;
  details: string;
}) => {
  return (
    <li className="grid grid-cols-[3rem_1fr] gap-2">
      <span className="bg-primaryColor rounded grid place-items-center max-h-12">
        {children}
      </span>
      <div className="grid">
        <span className="my-auto font-bold">{title}:</span>
        <span className=" my-auto">{details}</span>
      </div>
    </li>
  );
};

export default MapListItem;
