import { Order } from "../types";
import CustomModal from "./Modal";

interface TableProps {
  headers: Array<string>;
  data: Array<Order>;
}
const Table = ({ headers, data }: TableProps) => {
  return (
    <table className="min-w-full text-left text-sm font-light max-h-[440px]">
      <thead className="border-b font-medium dark:border-neutral-500 ">
        <tr>
          {headers.map((head, index) => {
            return (
              <th
                key={head}
                scope="col"
                className={`px-0 py-4 capitalize text-[#9CA4AB] text-[16px] font-[500] 
                ${
                  index === 4 ? "sticky right-0" : "relative"
                } bg-white dark:bg-darkbg`}
              >
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b dark:border-[#555]">
            <>
              <td className="flex items-center justify-start gap-[10px] whitespace-nowrap px-0 py-4 text-[#3A3F51] dark:text-white text-[16px] font-[500]">
                <img src={row.img} alt={`row ${rowIndex} image`} />
                {row.name}
              </td>
              <td className="whitespace-nowrap px-0 py-4 text-[#737373] dark:text-white text-[16px] font-[400]">
                {row.date}
              </td>
              <td className="whitespace-nowrap px-0 py-4 text-[#0D062D] dark:text-white text-[16px] font-[500]">
                {row.amount}
              </td>
              <td
                className={`whitespace-nowrap px-0 py-4 text-[16px] font-[400] 
                ${row.status == "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"}`}
              >
                {row.status}
              </td>

              <td className="sticky right-0 bg-white dark:bg-darkbg">
                <CustomModal {...row} />
              </td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
