import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./components/NavBar/Shop";
import { About } from "./components/NavBar/About";
import { LocationHours } from "./components/NavBar/LocationHours";
import { Login } from "./components/NavBar/LogIn";
import { Cart } from "./components/NavBar/Cart";
import { OrderOnline } from "./components/NavBar/OrderOnline";
export const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/LocationHours" element={<LocationHours />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/OrderOnline" element={<OrderOnline />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
