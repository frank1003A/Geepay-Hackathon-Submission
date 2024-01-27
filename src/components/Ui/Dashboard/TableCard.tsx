import { orderTable } from "../../../config/site";
import Card from "../../Card";
import Table from "../../Table";
import Sectionheader from "./Sectionheader";

const TableCard = () => {
  return (
    <div className="col-span-1 md:col-span-3  h-full">
      <Card>
        <Sectionheader title="Last Orders">
          <a href="/" className="font-[500] text-[#34CAA5] text-[18px]">
            See All
          </a>
        </Sectionheader>
        <div className="px-[16px] min-w-[700px]">
          <Table
            headers={["name", "date", "amount", "status", "invoice"]}
            data={orderTable}
          />
        </div>
      </Card>
    </div>
  );
};

export default TableCard;
