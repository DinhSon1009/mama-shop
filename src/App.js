import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar/Navbar";
import Shop from "./routes/Shop/Shop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
