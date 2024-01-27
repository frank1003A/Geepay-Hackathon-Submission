import { CalendarIcons } from "./Icons";

const Date = () => {
  return (
    <div className="flex items-center justify-start py-[12px] px-[16px] gap-[8px]  w-full">
      <CalendarIcons />
      <span className="text-primaryfont dark:text-white text-[14px]">
        November 15, 2023
      </span>
    </div>
  );
};

export default Date;
