import { ReactNode, useState } from "react";

import Bar from "../components/Ui/Bar";
import Sidebar from "../components/Ui/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [slidebar, SetSlidebar] = useState(false);

  const toggleSlidebar = () => SetSlidebar(!slidebar);
  return (
    <div className="flex bg-backgroundone dark:bg-darkbg">
      <Sidebar slidebar={slidebar} toggleSlidebar={() => SetSlidebar(false)} />
      <main className="ml-none md:ml-[80px] flex flex-col flex-1  bg-backgroundtwo dark:bg-darkbg">
        <Bar toggleSlidebar={toggleSlidebar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
