import React from "react";

const AchievementCard = ({
  children,
  strongTxt,
  txt,
  stat,
}: {
  children: React.ReactNode;
  strongTxt: string;
  txt: string;
  stat: number;
}) => {
  return (
    <div className="flex gap-4">
      {children}
      <div className="w-full">
        <strong className=" text-3xl w-full">{stat}</strong>
        <p className="text-justify">
          <strong className="font-black ">{strongTxt}</strong> {txt}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
