import { useEffect } from "react";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sceens/home/Home";
import ItemDetails from "./sceens/itemDetails/ItemDetails";
import Checkout from "./sceens/checkout/Checkout";
import Confirmation from "./sceens/checkout/Confirmation";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    return null;
  });
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/sucess" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
