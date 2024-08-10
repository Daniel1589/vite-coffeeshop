import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { LocationHours } from "./pages/LocationHours";
import { Login } from "./pages/LogIn";
import { Cart } from "./pages/Cart";
import { OrderOnline } from "./pages/OrderOnline";
import { Announcement } from "./components/Announcement";
import { MainPage } from "./components/MainPage/MainPage";
import { Subscribe } from "./pages/Subscribe";
export const App = () => {
  return (
    <div>
      <Router>
        <div className="w-full">
          <Announcement />
          <NavBar />
        </div>
        <div className="pt-[130px]">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/Shop" element={<Shop />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/LocationHours" element={<LocationHours />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/OrderOnline" element={<OrderOnline />}></Route>
            <Route path="/Subscribe" element={<Subscribe />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
