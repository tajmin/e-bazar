import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop/Shop";
import SignIn from "./pages/Sign-in/SignIn";
import SignUp from "./pages/Sign-up/SignUp";

const App = () => {
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
