import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center hover:bg-[#eee] dark:hover:bg-[#555] py-[6px] px-[12px] gap-[10px] rounded-[20px] border border-solid border-[#E1DFDF] dark:border-[#555]"
    >
      {children}
    </button>
  );
};

export default Button;
