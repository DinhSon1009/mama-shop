import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Authentication from "./routes/Authentication/Authentication";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar/Navbar";
import Shop from "./routes/Shop/Shop";
import { setCurrentUser } from "./store/user/userAction";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firsebase/firebase.utils";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));

      console.log(user);
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
