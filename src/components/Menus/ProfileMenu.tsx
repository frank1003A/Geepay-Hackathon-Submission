import { Menu } from "@headlessui/react";
import React from "react";

interface MenuProps {
  buttonContent: React.JSX.Element;
  name?: string;
  isMobile?: boolean;
}

const ProfileMenu = ({ buttonContent, name, isMobile }: MenuProps) => {
  return (
    <Menu as={"div"} className={"relative block"}>
      <Menu.Button
        className="rounded-full border border-[#DADDD] dark:border-[#555] bg-none hover:bg-[#eee] dark:hover:bg-[#555]"
        style={{
          padding: isMobile ? "2px" : "11px",
        }}
      >
        {buttonContent}
      </Menu.Button>
      <Menu.Items className="absolute border border-[#EDF2F7] p-2 right-0 mt-2 m-0 z-[800] min-w-max list-none overflow-hidden rounded-lg bg-white bg-clip-padding text-left text-base border-border  dark:border-[#555] shadow-lg dark:bg-carddark [&[data-te-dropdown-show]]:block">
        <div className="flex gap-[10px] items-center justify-between border-[#EDF2F7] p-2 bg-[#EEE] dark:bg-[#555] rounded-md">
          <div className="text-white text-[14px] bg-primary w-[25px] h-[25px] gap-[14px] rounded-md flex items-center justify-center p-[11] bg-primary">
            J
          </div>
          {name}
        </div>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "border-primary"
              } p-2 block rounded-md w-full whitespace-nowrap bg-transparent px-2 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
              href="#"
            >
              Help Center
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "border-primary"
              } p-2 block rounded-md w-full whitespace-nowrap bg-transparent px-2 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
              href="#"
            >
              Change log
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "border-primary"
              } p-2 block rounded-md w-full whitespace-nowrap bg-transparent px-2 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
              href="#"
            >
              Community Forum
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active && "border-primary"
              } p-2 block rounded-md w-full whitespace-nowrap bg-transparent px-2 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
              href="#"
            >
              Manage Account
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ProfileMenu;
