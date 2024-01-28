import userImg from "../assets/userimage.png";
import { ChevronDownIcons } from "./Icons";
import ProfileMenu from "./Menus/ProfileMenu";

const User = () => {
  return (
    <>
      <div
        className="hidden md:flex items-center px-[8px] py-[6px] justify-center rounded-[28px] border border-[#DADDD] 
      dark:border-[#555] gap-[12px]"
      >
        <img src={userImg} alt="user" />
        <div className="flex flex-col">
          <span id="user" className="text-primaryfont text-[16px] end">
            Justin Bergson
          </span>
          <span id="user-email" className="text-secondaryfont text-[14px] end">
            Justin@gmail.com
          </span>
        </div>
        <ProfileMenu
          buttonContent={
            <span className="group-hover:rotate-180">
              <ChevronDownIcons />
            </span>
          }
          name="Justin Bergson"
        />
      </div>
      <div className="flex md:hidden">
        <ProfileMenu
          isMobile
          name="Justin Bergson"
          buttonContent={
            <img src={userImg} className="w-[38px h-[38px]" alt="user" />
          }
        />
      </div>
    </>
  );
};

export default User;
