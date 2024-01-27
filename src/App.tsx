import { useEffect, useState } from "react";
import Date from "./components/Date";
import Search from "./components/Search";
import ChartCard from "./components/Ui/Dashboard/ChartCard";
import PlatformsCard from "./components/Ui/Dashboard/PlatformsCard";
import PrimaryGrid from "./components/Ui/Dashboard/PrimaryGrid";
import Stats from "./components/Ui/Dashboard/Stats";
import TableCard from "./components/Ui/Dashboard/TableCard";
import Layout from "./layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center fixed inset-0 bg-white">
          <p>Loading...</p>
        </div>
      ) : (
        <Layout>
          <div className="py-2 w-full md:hidden">
            <Date />
          </div>
          <div className="flex items-center justify-start py-[0px] md:py-[20px] px-4 lg:hidden">
            <Search />
          </div>
          <PrimaryGrid>
            <ChartCard />
            <Stats />
            <TableCard />
            <PlatformsCard />
          </PrimaryGrid>
        </Layout>
      )}
    </>
  );
}

export default App;
