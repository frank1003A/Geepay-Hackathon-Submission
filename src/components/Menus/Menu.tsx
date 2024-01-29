import { Menu, Transition } from "@headlessui/react";
import React, { useRef, useState } from "react";
import { Portal } from "react-portal";

interface MenuProps {
  menuButton: React.JSX.Element;
  handleClick: () => void;
}

interface ButtonPosition {
  top: number;
  left: number;
}

const menuList = ["daily", "Weekly", "Monthly"];

const CustomMenu = ({ menuButton, handleClick }: MenuProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonPosition, setButtonPosition] = useState<ButtonPosition>({
    top: 0,
    left: 0,
  });

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Calculate button position relative to the viewport
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setButtonPosition({ top, left });
  };

  return (
    <Menu as={"div"} className="relative">
      <Menu.Button
        ref={buttonRef}
        className="flex items-center justify-center hover:bg-[#eee] dark:hover:bg-[#555] py-[6px] px-[12px] gap-[10px] rounded-[20px] border border-solid border-[#E1DFDF] dark:border-[#555]"
        onClick={handleButtonClick}
      >
        {menuButton}
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Portal node={document && document.getElementById("portal-root")}>
          <Menu.Items
            style={{
              top: buttonPosition.top + 35,
              left: buttonPosition.left,
            }}
            className="w-fit absolute border border-[#EDF2F7] p-2 right-0 mt-2 m-0 min-w-max list-none overflow-hidden rounded-lg bg-white bg-clip-padding text-left text-base border-border  dark:border-[#555] shadow-lg dark:bg-carddark [&[data-te-dropdown-show]]:block"
          >
            {menuList.map((menu) => {
              return (
                <Menu.Item key={menu} disabled={false}>
                  {({ active }) => (
                    <span
                      className={`${
                        active && "bg-primary"
                      } cursor-pointer rounded-md block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-[#eee] active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                      onClick={handleClick}
                    >
                      {menu}
                    </span>
                  )}
                </Menu.Item>
              );
            })}
            <Menu.Item>
              {({ active, close }) => (
                <span
                  onClick={close}
                  className={`${
                    active && "bg-primary"
                  } rounded-md block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-[#eee] active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                >
                  Custom
                </span>
              )}
            </Menu.Item>
          </Menu.Items>
        </Portal>
      </Transition>
    </Menu>
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
