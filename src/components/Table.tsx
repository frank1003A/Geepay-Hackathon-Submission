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
                key={head + "_" + index}
                scope="col"
                className="px-0 py-4 capitalize text-[#9CA4AB] text-[16px] font-[500] sticky top-0"
              >
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            className="border-b dark:border-[#555]"
            key={row.name + "_" + rowIndex}
          >
            <>
              <td
                className="flex items-center justify-start gap-[10px] whitespace-nowrap px-0 py-4 text-[#3A3F51] dark:text-white text-[16px] font-[500]"
                key={rowIndex}
              >
                <img src={row.img} alt={`row ${rowIndex} image`} />
                {row.name}
              </td>
              <td
                className="whitespace-nowrap px-0 py-4 text-[#737373] dark:text-white text-[16px] font-[400]"
                key={rowIndex}
              >
                {row.date}
              </td>
              <td
                className="whitespace-nowrap px-0 py-4 text-[#0D062D] dark:text-white text-[16px] font-[500]"
                key={rowIndex}
              >
                {row.amount}
              </td>
              <td
                className={`whitespace-nowrap px-0 py-4 text-[16px] font-[400] 
                ${row.status == "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"}`}
                key={rowIndex}
              >
                {row.status}
              </td>

              <td>
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
