import { useEffect, useRef, useState } from "react";
import { BiX } from "react-icons/bi";
import { siteConfig } from "../../config/site";
import { Logo } from "../Icons";
import Switcher from "../ThemeSwitcher";

interface SidebarProps {
  slidebar: boolean;
  toggleSlidebar: () => void;
}
const Sidebar = ({ slidebar, toggleSlidebar }: SidebarProps) => {
  const [active, setActive] = useState(0);
  const sbRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sidebar = sbRef.current as HTMLElement;
    const menus = sidebar.querySelectorAll("button, a");
    const trigger = document.getElementById(
      "logo_hamburger"
    ) as HTMLButtonElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const currentIndex = Array.from(menus).findIndex(
        (el) => el === activeElement
      );

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          if (currentIndex < menus.length - 1) {
            (
              menus[currentIndex + 1] as HTMLButtonElement | HTMLAnchorElement
            ).focus();
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (currentIndex > 0) {
            (
              menus[currentIndex - 1] as HTMLButtonElement | HTMLAnchorElement
            ).focus();
          }
          break;
        case "Escape":
          event.preventDefault();
          trigger ? trigger.focus() : null;
          toggleSlidebar();
          break;
        default:
          break;
      }
    };

    if (slidebar) {
      (menus.item(0) as HTMLButtonElement | HTMLAnchorElement).focus();
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [slidebar, toggleSlidebar]);

  return (
    <>
      <aside
        ref={sbRef}
        className={`fixed inset-0 z-[1000] ${
          slidebar === false ? "translate-x-[-100%]" : "translate-x-[0%]"
        } transition-[.5s] md:transform-none bg-[#F7F8FA] dark:bg-darkbg md:block w-[80px] px-0 border-r border-e-border dark:border-e-[#555] h-full`}
        aria-hidden={slidebar ? "true" : "false"}
      >
        <div className="relative flex flex-col justify-start align-center pt-[20px] h-full">
          {slidebar ? (
            <button
              className="md:hidden absolute right-[-60px] flex items-center justify-center text-white bg-primary text-[20px] p-3 rounded-md"
              onClick={toggleSlidebar}
            >
              <BiX />
            </button>
          ) : null}
          <div className="flex justify-center align-center">
            <a href="/">
              <Logo />
            </a>
          </div>
          <ul className="flex flex-col w-full mt-4 gap-[10px] align-center justify-center">
            <li className="w-full">
              {siteConfig.sidebarSvgs.map((Icon, index) => (
                <button
                  className={`relative bg-none w-full h-[40px] transition p-[10px] flex justify-center align-center after:content-[''] after:w-[3px] after:bottom-[10px] after:top-[10px] after:${
                    active === index
                      ? "bg-black after:bg-primary"
                      : "bg-transparent after:bg-transparent"
                  } after:absolute after:right-0 after:rounded-l-lg after:hover:bg-black after:dark:hover:bg-primary`}
                  key={index}
                  onClick={() => setActive(index)}
                >
                  <Icon />
                </button>
              ))}
            </li>
          </ul>
          <div className="flex w-full mt-4 align-center justify-center">
            <Switcher />
          </div>
          <ul className="flex flex-col w-full mt-auto gap-[10px] align-center justify-center">
            <li className="w-full">
              {siteConfig.controlSvgs.map((svgString, index) => (
                <button
                  className={`relative bg-none w-full h-[40px] transition p-[10px] flex justify-center align-center after:content-[''] after:w-[3px] after:bottom-[10px] after:top-[10px] after:${
                    active ? "bg-black" : "bg-transparent"
                  } after:absolute after:right-0 after:rounded-l-lg after:hover:bg-black after:dark:hover:bg-primary`}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: svgString }}
                  onClick={() => setActive(index)}
                />
              ))}
            </li>
          </ul>
        </div>
      </aside>
      <div
        className={`${
          slidebar === false ? "hidden" : "block"
        } fixed inset-0 bg-black/[0.5] z-[999]`}
        onClick={toggleSlidebar}
      ></div>
    </>
  );
};

export default Sidebar;
