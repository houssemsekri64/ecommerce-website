import { Suspense, useRef, useState } from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";

import FeaturedItemsHeader from "./componenets/FeaturedItemsHeader";
import ItemGrid from "./componenets/ItemGrid";

function ShoppingList() {
  const sectionRef = useRef(null);
  const handleButtonClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box width="80%" margin="80px auto" ref={sectionRef}>
      <FeaturedItemsHeader />
      <ItemGrid handleButtonClick={handleButtonClick} />
    </Box>
  );
}

export default ShoppingList;
