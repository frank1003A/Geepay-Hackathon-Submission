import { Popover, Transition } from "@headlessui/react";
import { BiFilter } from "react-icons/bi";
import { Order } from "../types";
import { Checkbox } from "./Checkbox";
import CustomModal from "./Modal";

interface TableProps {
  headers: Array<string>;
  data: Array<Order>;
  sortPaid: () => void;
  sortRefund: () => void;
  reset: () => void;
}
const Table = ({ headers, data, sortPaid, sortRefund, reset }: TableProps) => {
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
                {index === 3 ? (
                  <Popover className="relative">
                    <Popover.Button
                      aria-label="sort by paid or refund"
                      className="w-fit px-1 flex items-center bg-white dark:bg-carddark rounded-md focus:outline-1 hover:bg-[#eee] hover:dark:bg-[#555]"
                    >
                      {head}
                      <BiFilter />
                    </Popover.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel className="min-w-[150px] shadow-2xl border border-[#EDF2F7] mt-2 flex flex-col bg-white absolute z-10 border-one rounded-md py-2">
                        <div className="flex items-center px-3 py-1 w-full hover:bg-[#eee]">
                          <Checkbox onChange={sortPaid} title="Paid" />
                        </div>
                        <div className="flex items-center px-3 py-1 w-full hover:bg-[#eee]">
                          <Checkbox title="Refund" onChange={sortRefund} />
                        </div>
                        <div className="flex items-center px-3 py-1 w-full hover:bg-[#eee]">
                          <Checkbox title="Reset" onChange={reset} />
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ) : (
                  head
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="transition">
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="transition border-b dark:border-[#555] hover:bg-[#eee] hover:dark:bg-[#555]"
          >
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
