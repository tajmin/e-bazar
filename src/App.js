import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/Sign-in/SignIn";
import SignUp from "./pages/Sign-up/SignUp";
import { setCurrentUser } from "./store/user/user.action";
import {
  authStageChangeListener,
  createUserDocFromAuth,
} from "./Utility/Firebase/Firebase";

const App = () => {
  const dispatch = useDispatch();

  /* 
   The dispatch from redux is created only once and this never 
   updates, it remains the same. The useEffect hook throws a 
   warning if the dispatch isn't put as a dependency which is 
   a contradiction as React doesn't know that dispatch doesn't
  change over time but still throws warning.
  */
  useEffect(() => {
    const unscribe = authStageChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
