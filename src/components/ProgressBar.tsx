import Tippy from "@tippyjs/react";

interface ProgressBarProps {
  color: string;
  percent: string;
}
const ProgressBar = ({ color, percent }: ProgressBarProps) => {
  return (
    <Tippy
      content={
        <div className="relative mx-2 transition">
          <div className="bg-black text-white text-xs rounded py-[5px] px-4 right-0 bottom-full rounded-md">
            {percent}
            <svg
              className="absolute text-white h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon className="fill-black" points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
      }
    >
      <div
        role="progressbar"
        className="w-full h-[12px] mb-4 bg-gray-200 rounded-full bg-[#F5F5F5] dark:bg-gray-700"
      >
        <div
          className={`h-full rounded-full animate-progressbar`}
          style={{ width: percent, background: color }}
        ></div>
      </div>
    </Tippy>
  );
};

export default ProgressBar;
