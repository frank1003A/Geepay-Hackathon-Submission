import { useState } from "react";
import Card from "../../Cards/Card";
import { ChevronDownIcons } from "../../Icons";
import CustomMenu from "../../Menus/Menu";
import BarChart from "../../Rechart/BarChart";
import Sectionheader from "./Sectionheader";

const dataList = [
  { name: "Jan", pv: 8.0 },
  { name: "Feb", pv: 18.0 },
  { name: "Mar", pv: 6.0 },
  { name: "Apr", pv: 28.0 },
  { name: "May", pv: 9.0 },
  { name: "Jun", pv: 45.0 },
  { name: "Jul", pv: 9.0 },
  { name: "Aug", pv: 20.0 },
  { name: "Sep", pv: 32.0 },
  { name: "Oct", pv: 7.0 },
  { name: "Nov", pv: 29.0 },
  { name: "Dec", pv: 26.0 },
];

const ChartCard = () => {
  const [chartData, setChartData] = useState(dataList);

  const generateRandomData = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const data = [];
    for (let i = 0; i < 12; i++) {
      const pv = Math.random() * 50; // Random value for pv
      data.push({ name: months[i], pv });
    }
    return data;
  };

  // Generate two new datasets
  const newData1 = generateRandomData();
  //const newData2 = generateRandomData();

  return (
    <div className="col-span-1 md:col-span-3 max-h-[400px] min-h-[400px] overflow-auto md:overflow-auto">
      <Card>
        <Sectionheader title="Sales Trends">
          <span>short by: </span>
          <CustomMenu
            menuButton={
              <>
                Weekly
                <ChevronDownIcons />
              </>
            }
            handleClick={() => setChartData(newData1)}
          />
        </Sectionheader>
        <div className="h-full min-w-[700px] max-h-[300px] mt-[20px]">
          <BarChart data={chartData} />
        </div>
      </Card>
    </div>
  );
};

export default ChartCard;
