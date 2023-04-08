import { useEffect } from "react";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sceens/home/Home";
import ItemDetails from "./sceens/itemDetails/ItemDetails";
import Checkout from "./sceens/checkout/Checkout";
import Confirmation from "./sceens/checkout/Confirmation";
import Navbar from "./sceens/global/Navbar";
import CartMenu from "./sceens/global/CartMenu";
import Footer from "./sceens/global/Footer";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
