import { Menu, Transition } from "@headlessui/react";
import React from "react";

interface MenuProps {
  menuButton: React.JSX.Element;
  items?: Array<string>;
}

const NotifyMenu = ({ menuButton, items }: MenuProps) => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="relative rounded-full border border-[#DADDD] dark:border-[#555] bg-none hover:bg-[#eee] dark:hover:bg-[#555] p-[11px]">
          {menuButton}
          <div className="absolute right-0 top-[-8px] p-[2px] bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
            2
          </div>
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute border border-[#EDF2F7] p-2 right-0 mt-2 m-0 z-[800] min-w-max list-none overflow-hidden rounded-lg bg-white bg-clip-padding text-left text-base border-border  dark:border-[#555] shadow-lg dark:bg-carddark [&[data-te-dropdown-show]]:block">
            <div className="flex items-center gap-[20px] justify-between border-[#EDF2F7] p-2 bg-[#EEE] dark:bg-[#555] rounded-md">
              Notifications
            </div>
            {items ? (
              items.map((item, index) => {
                return (
                  <Menu.Item key={item + index}>
                    {({ active }) => (
                      <a
                        className={`${
                          active && "bg-blue-500"
                        } p-2 block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                        href="#"
                      >
                        {item}
                      </a>
                    )}
                  </Menu.Item>
                );
              })
            ) : (
              <div className="flex items-center justify-center p-[20px]">
                <p>No Message Yet</p>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NotifyMenu;
