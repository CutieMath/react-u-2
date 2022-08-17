import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
