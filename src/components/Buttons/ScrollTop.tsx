import { BiArrowToTop } from "react-icons/bi";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      className="p-3 shadow-lg rounded-md text-[20px] flex items-center justify-center bg-primary text-white fixed bottom-[20px] right-[20px]"
      onClick={scrollToTop}
    >
      <BiArrowToTop />
    </button>
  );
};

export default ScrollTop;
