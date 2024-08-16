import { NavBar } from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Login } from "./pages/LogIn";
import { Cart } from "./pages/Cart";
import { Announcement } from "./components/Announcement";
import { MainPage } from "./components/MainPage/MainPage";
import { Footer } from "./components/Footer";
import { Subscribe } from "./pages/Subscribe";
import { Blends } from "./components/Blends";
import ReviewForm from "./components/ReviewForm";
export const App = () => {
  return (
    <div>
      <Router>
        <div className="w-full">
          <Announcement />
          <NavBar />
        </div>
        <div className="pt-[130px]">
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={{
            enter: "opacity-0",
            enterActive: "opacity-100 transition-opacity duration-300 ease-in",
            exit: "opacity-100",
            exitActive: "opacity-0 transition-opacity duration-300 ease-out",
          }}
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/Shop" element={<Shop />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Subscribe" element={<Subscribe />}></Route>
            <Route path="/Review" element={<ReviewForm />}></Route>
            <Route path="/blend/:id" element={<Blends />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
