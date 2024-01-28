import Date from "../Date";
import { BellIcon, Logo } from "../Icons";
import NotifyMenu from "../Menus/NotifyMenu";
import Search from "../Search";
import User from "../User";

interface BarProps {
  toggleSlidebar: () => void;
}
const Bar = ({ toggleSlidebar }: BarProps) => {
  return (
    <header className="flex w-full border-b dark:border-b-[#555] p-[18px] sticky top-0 backdrop-blur-lg max-h-[80px] z-[900]">
      <div className="flex items-center justify-center w-full dark:text-white">
        <button
          id="logo_hamburger"
          className="bg-none rounded-full md:hidden"
          onClick={toggleSlidebar}
        >
          <Logo />
        </button>
        <h1 className="ml-[10px] md:ml-none font-bold leading-[28px] text-[#26282C] dark:text-white">
          Dashboard
        </h1>
        <div className="ml-auto flex items-center gap-[20px]">
          <div className="hidden lg:flex">
            <Search />
          </div>
          <div className="hidden md:flex">
            <Date />
          </div>
          <NotifyMenu menuButton={<BellIcon />} />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Bar;
