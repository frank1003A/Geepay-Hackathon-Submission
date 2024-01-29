import { CalendarIcons } from "./Icons";

const DateComponent = () => {
  return (
    <button className="flex items-center justify-start py-[12px] px-[16px] gap-[8px] w-full rounded-md hover:bg-[#eee] dark:hover:bg-[#555] pointer">
      <CalendarIcons />
      <span className="text-primaryfont dark:text-white text-[14px]">
        November 15, 2023
      </span>
    </button>
  );
};

export default DateComponent;
