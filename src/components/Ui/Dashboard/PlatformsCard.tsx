import ProgressBar from "../../ProgressBar";
import Sectionheader from "./Sectionheader";

interface PlatformCardProps {
  name: string;
  color: string;
  percent: string;
  amt: string;
  increase: string;
}

const platforsmData: Array<PlatformCardProps> = [
  {
    name: "Book Bazaar",
    color: "#6160DC",
    amt: " $2,500,000",
    increase: "+15%",
    percent: "60%",
  },
  {
    name: "Artisan Aisle",
    color: "#54C5EB",
    amt: "$1,800,000",
    increase: "+10%",
    percent: "50%",
  },
  {
    name: "Toy Troop",
    color: "#FFB74A",
    amt: "$1,200,000",
    increase: "+8%",
    percent: "30%",
  },
  {
    name: "XStore",
    color: "#FF4A55",
    amt: "$1,000,000",
    increase: "+8%",
    percent: "29%",
  },
];

const PlatformsCard = () => {
  return (
    <div className="dark:bg-carddark dark:text-white dark:border-[#555] max-h-[440px] flex flex-col col-span-1 md:col-span-2 bg-white rounded-[8px] pt-[16px] pb-[32px] gap-[20px] rounded-[14px] border border-[#EDF2F7]">
      <Sectionheader title="Top Platform">
        <a href="/" className="font-[500] text-[#34CAA5] text-[18px]">
          See All
        </a>
      </Sectionheader>
      <div className="flex flex-col items-center justify-start gap-[20px] pl-[20px] pr-[16px] overflow-auto">
        {platforsmData.map((platform, index) => {
          return <PlatformCard key={platform + "_" + index} {...platform} />;
        })}
      </div>
    </div>
  );
};

export default PlatformsCard;

const PlatformCard = ({
  name,
  amt,
  color,
  increase,
  percent,
}: PlatformCardProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[10px] w-full">
      <span>{name}</span>
      <ProgressBar color={color} percent={percent} />

      <div className="flex w-full items-center justify-between">
        <span>{amt}</span>
        <span>{increase}</span>
      </div>
    </div>
  );
};
