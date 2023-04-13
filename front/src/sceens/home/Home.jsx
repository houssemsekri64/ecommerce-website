import React from "react";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./shoppingList";
import useGetItems from "../../hooks/useGetItems";
function Home() {
  useGetItems();
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
    </div>
  );
}

export default Home;
