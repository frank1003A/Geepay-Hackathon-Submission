import React from "react";
interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  // Define Additional Props Here
}
const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <button
      className=" rounded-full border border-[#DADDD] dark:border-[#555] bg-none hover:bg-[#eee] dark:hover:bg-[#555] p-[11px]"
      {...rest}
    >
      <span className="dark:text-white">{children}</span>
    </button>
  );
};

export default IconButton;
