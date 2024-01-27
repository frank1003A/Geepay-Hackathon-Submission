import React from "react";

interface SectionheaderProps {
  title: string;
  children: React.ReactNode;
}
const Sectionheader = ({ title, children }: SectionheaderProps) => {
  return (
    <div className="flex w-full items-center justify-between text-[18px] dark:text-white sticky top-0 left-0 bg-white dark:bg-carddark pl-[20px] pr-[16px]">
      <h1 className="font-bold text-primaryfont text-[#26282C] dark:text-white">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-[10px] text-[14px] ">
        {children}
      </div>
    </div>
  );
};

export default Sectionheader;
