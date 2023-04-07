import React from "react";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./shoppingList";

function Home() {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
    </div>
  );
}

export default Home;
