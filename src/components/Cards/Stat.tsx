interface StatProps {
  icon: React.ReactElement;
  chart: React.ReactElement;
  ariaLabel: string;
  title: string;
  num: string;
  percentage: string;
  tr: "up" | "down";
}
const Stat = ({
  icon,
  chart,
  title,
  num,
  ariaLabel,
  percentage,
  tr,
}: StatProps) => {
  return (
    <div className="bg-white dark:bg-carddark dark:border-[#555] h-fit gap-[10px] flex flex-col flex-shrink-0 px-[16px] py-[16px] rounded-[14px] border border-[#EDF2F7]">
      <div className="flex items-center justify-between">
        <div
          aria-label={ariaLabel}
          className=" flex items-center justify-center rounded-full w-[40px] h-[40px] border border-[#DADDD] dark:border-[#555] bg-none p-[11px]"
        >
          {icon}
        </div>
        <div className="h-32px flex-shrink-0">{chart}</div>
      </div>
      <span className="text-[18px] font-[500] text-[#898989] dark:text-white capitalize">
        {title}
      </span>
      <span className="text-[24px] font-[600] text-[#3A3F51] dark:text-white">
        {num}
      </span>
      <div className="flex items-center justify-between">
        {/** badge */}
        <div className="flex items-center justify-between w-full text-[13px] text-[#606060] gap-[10px]">
          <div
            className={`flex items-center gap-[4px] justify-center text-[12px] px-[8px] py-[4px] rounded-[100px]
          ${
            tr == "up"
              ? "text-[#34CAA5] bg-[#34CAA5]/[0.12]"
              : "text-[#ED544E] bg-[#ED544E]/[0.12]"
          }  
          `}
          >
            {tr == "up" ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5"
                  stroke="#34CAA5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 3.5H10.5V7"
                  stroke="#34CAA5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5"
                  stroke="#ED544E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 8.5H10.5V5"
                  stroke="#ED544E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {percentage}
          </div>
          vs. previous month
        </div>
      </div>
    </div>
  );
};

export default Stat;
