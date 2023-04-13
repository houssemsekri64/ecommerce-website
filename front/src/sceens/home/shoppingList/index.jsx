import { Suspense, useState } from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import FeaturedItemsHeader from "./componenets/FeaturedItemsHeader";
import ItemGrid from "./componenets/ItemGrid";

function ShoppingList() {
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.cart.loading);
  const state = useSelector((state) => state);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box width="80%" margin="80px auto">
      <FeaturedItemsHeader />
      <ItemGrid items={items} value={value} loading={loading} />
    </Box>
  );
}

export default ShoppingList;
