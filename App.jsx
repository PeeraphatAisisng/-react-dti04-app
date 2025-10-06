import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import SquareCal from "./views/SquareCal";
import BmrCal from "./views/BmrCal";
import MoneyCal from "./views/MoneyCal";
import CarCal from "./views/CarCal";
import NotFound from "./views/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator/squareCal" element={<SquareCal />} />
        <Route path="/calculator/bmrCal" element={<BmrCal />} />
        <Route path="/calculator/moneyCal" element={<MoneyCal />} />
        <Route path="/calculator/carCal" element={<CarCal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
