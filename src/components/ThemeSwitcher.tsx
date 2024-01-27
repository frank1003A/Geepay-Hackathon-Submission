import useDarkSide from "../hooks/useDarkMode";
import { MoonIcon, SunIcon } from "./Icons";

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();

  const toggleDarkMode = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="p-[8px] transition bg-white dark:bg-darkbg dark:border dark:border-[#555] flex flex-col gap-3 w-fit align-center rounded-[100px] bg-white">
      <button
        className={`${
          theme === "light" ? "bg-primary" : "bg-transparent"
        } flex align-center justify-center w-[30px] px-[7.5px] py-[6.563px] rounded-full
        transition-colors ease-in-out duration-[0.5s]
        `}
        onClick={() => toggleDarkMode("light")}
      >
        <SunIcon />
      </button>
      <button
        className={`${
          theme === "dark" ? "bg-primary" : "bg-transparent"
        } flex align-center justify-center w-[30px] px-[7.5px] py-[6.563px] rounded-full
        transition-colors ease-in-out duration-[0.5s]
        `}
        onClick={() => toggleDarkMode("dark")}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
