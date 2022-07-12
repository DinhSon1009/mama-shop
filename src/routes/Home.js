import categories from "../data/categories.json";
import { Outlet } from "react-router-dom";
import Directory from "../components/Directory/Directory";
function Home() {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
}

export default Home;
