import { Suspense, useRef, useState } from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import FeaturedItemsHeader from "./componenets/FeaturedItemsHeader";
import ItemGrid from "./componenets/ItemGrid";

function ShoppingList() {
  const sectionRef = useRef(null);
  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const items = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.cart.loading);

  return (
    <Box width="80%" margin="80px auto" ref={sectionRef}>
      <FeaturedItemsHeader />
      <ItemGrid
        items={items}
        loading={loading}
        handleButtonClick={handleButtonClick}
      />
    </Box>
  );
}

export default ShoppingList;
