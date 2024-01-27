interface ProgressBarProps {
  color: string;
  percent: string;
}
const ProgressBar = ({ color, percent }: ProgressBarProps) => {
  return (
    <div
      role="progressbar"
      className="w-full h-[12px] mb-4 bg-gray-200 rounded-full bg-[#F5F5F5] dark:bg-gray-700"
    >
      <div
        className={`h-full rounded-full`}
        style={{ width: percent, background: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
