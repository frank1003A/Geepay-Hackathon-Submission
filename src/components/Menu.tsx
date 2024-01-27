import { Menu } from "@headlessui/react";
import React from "react";

interface MenuProps {
  menuButton: React.JSX.Element;
}
const CustomMenu = ({ menuButton }: MenuProps) => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button tabIndex={-1}>{menuButton}</Menu.Button>
        <Menu.Items className="absolute border border-[#EDF2F7] p-2 right-0 mt-2 m-0 z-[9999] min-w-max list-none overflow-hidden rounded-lg bg-white bg-clip-padding text-left text-base border-border  dark:border-[#555] shadow-lg dark:bg-carddark [&[data-te-dropdown-show]]:block">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-primary"
                } block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-[#eee] active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                href="/account-settings"
              >
                Monthly
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-primary"
                } block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-[#eee] active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                href="/account-settings"
              >
                Yearly
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-primary"
                } block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-[#eee] active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                href="/account-settings"
              >
                Custom
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;

/**  <div className="relative" data-te-dropdown-ref>
        {menuButton}
          <ul
            className="absolute z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1d"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Something else here
              </a>
            </li>
            <hr className="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
            <li>
              <a
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
              >
                Separated link
              </a>
            </li>
          </ul>
      </div> */
