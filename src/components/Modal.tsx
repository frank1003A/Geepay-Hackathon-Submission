import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiDownload, BiPrinter } from "react-icons/bi";
import { Order } from "../types";
import IconButton from "./IconButton";
import { Logo } from "./Icons";

interface ModalProps extends Order {}

export default function CustomModal({
  name,
  amount,
  date,
  status,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center bg-none text-[14px] font-[400] text-[#0D062D] dark:text-white p-1 gap-[5px] hover:text-primary"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
            className="fill-[#292D32] dark:fill-white"
          />
          <path
            d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
            className="fill-[#292D32] dark:fill-white"
          />
          <path
            d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
            className="fill-[#292D32] dark:fill-white"
          />
          <path
            d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
            className="fill-[#292D32] dark:fill-white"
          />
        </svg>
        view
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[24rem] transform overflow-hidden rounded-md bg-white dark:bg-darkbg pt-6 pb-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="border-b dark:border-b-[#555] pb-[10px] px-4 flex items-center justify-between gap-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    <Logo />
                    Invoice
                    <div className="flex items-center justify-center gap-[5px] ml-auto">
                      <IconButton>
                        <BiPrinter />
                      </IconButton>
                      <IconButton>
                        <BiDownload />
                      </IconButton>
                    </div>
                  </Dialog.Title>
                  <div className="px-4 py-5 sm:p-4 ">
                    <div className="flex w-full items-center justify-between border-b dark:border-b-[#555] pb-[10px]">
                      <div className="flex flex-col items-start justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Name
                        </span>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
                          {name}
                        </span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Date
                        </span>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
                          {date}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between border-b dark:border-b-[#555] pb-[10px] pt-[10px]">
                      <div className="flex flex-col items-start justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Amount
                        </span>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
                          {amount}
                        </span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Paid
                        </span>
                        <span className="text-lg font-medium text-gray-800 dark:text-white">
                          {status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
