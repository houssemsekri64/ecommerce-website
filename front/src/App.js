import { useEffect } from "react";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sceens/home/Home";
import ItemDetails from "./sceens/itemDetails/ItemDetails";
import Checkout from "./sceens/checkout/Checkout";
import Confirmation from "./sceens/checkout/Confirmation";
import Navbar from "./sceens/global/Navbar";
import CartMenu from "./sceens/global/CartMenu";
import Footer from "./sceens/global/Footer";
import ContactUs from "./sceens/global/ContactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <ContactUs />
          <Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
