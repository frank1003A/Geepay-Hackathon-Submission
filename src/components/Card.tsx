import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-auto md:overflow-hidden h-full bg-white dark:bg-carddark flex flex-col justify-evenly flex-shrink-0 py-[16px] rounded-[14px] border border-[#EDF2F7] dark:border-[#555]">
      {children}
    </div>
  );
};

export default Card;
