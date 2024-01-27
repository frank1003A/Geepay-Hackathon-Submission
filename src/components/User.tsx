import userImg from "../assets/userimage.png";
import IconButton from "./IconButton";
import { ChevronDownIcons } from "./Icons";
import ProfileMenu from "./ProfileMenu";

const User = () => {
  return (
    <>
      <div
        className="hidden md:flex items-center px-[8px] py-[6px] justify-center rounded-[28px] border border-[#DADDD] 
      dark:border-[#555] gap-[12px]"
      >
        <img src={userImg} alt="user" />
        <div className="flex flex-col">
          <span id="user" className="text-primaryfont text-[16px]">
            Justin Bergson
          </span>
          <span id="user-email" className="text-secondaryfont text-[14px]">
            Justin@gmail.com
          </span>
        </div>
        <ProfileMenu
          menuButton={
            <IconButton aria-describedby="user">
              <ChevronDownIcons />
            </IconButton>
          }
          name="Justin Bergson"
          items={[
            "Help Center",
            "Change log",
            "Community Forum",
            "Manage Account",
            "Logout",
          ]}
        />
      </div>
      <div className="flex md:hidden">
        <ProfileMenu
          name="Justin Bergson"
          menuButton={
            <button
              className="flex items-center p-1 justify-center rounded-[28px] border border-[#DADDD] 
          dark:border-[#555]"
            >
              <img src={userImg} className="max-h-[34px]" alt="user" />
            </button>
          }
          items={[
            "Help Center",
            "Change log",
            "Community Forum",
            "Manage Account",
            "Logout",
          ]}
        />
      </div>
    </>
  );
};

export default User;
