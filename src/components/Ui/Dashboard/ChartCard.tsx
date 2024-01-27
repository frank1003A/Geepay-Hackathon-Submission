import Card from "../../Cards/Card";
import { ChevronDownIcons } from "../../Icons";
import CustomMenu from "../../Menus/Menu";
import BarChart from "../../Rechart/BarChart";
import Sectionheader from "./Sectionheader";

const ChartCard = () => {
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
          />
        </Sectionheader>
        <div className="h-full min-w-[700px] max-h-[300px] mt-[20px]">
          <BarChart />
        </div>
      </Card>
    </div>
  );
};

export default ChartCard;
