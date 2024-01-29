import { useState } from "react";
import { orderTable } from "../../../config/site";
import Card from "../../Cards/Card";
import Table from "../../Table";
import Sectionheader from "./Sectionheader";

const TableCard = () => {
  const [table, setTable] = useState(orderTable);
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
            sortPaid={() => {
              const ot = orderTable.filter((o) => {
                return o.status === "Paid";
              });
              setTable(ot);
            }}
            sortRefund={() => {
              const ot = orderTable.filter((o) => {
                return o.status === "Refund";
              });
              setTable(ot);
            }}
            reset={() => {
              setTable(orderTable);
            }}
            headers={["name", "date", "amount", "status", "invoice"]}
            data={table}
          />
        </div>
      </Card>
    </div>
  );
};

export default TableCard;
