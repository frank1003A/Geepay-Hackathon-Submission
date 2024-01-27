import React from "react";

const PrimaryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-[14px] gap-y-[20px] grid-rows-1 py-[20px] px-4 md:px-[20px]">
      {children}
    </div>
  );
};

export default PrimaryGrid;
