import { Suspense, useState } from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import useGetItems from "../../../hooks/useGetItems";
import FeaturedItemsHeader from "./componenets/FeaturedItemsHeader";
import ItemGrid from "./componenets/ItemGrid";
import ItemTabs from "./componenets/ItemTabs";

function ShoppingList() {
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.cart.loading);
  const state = useSelector((state) => state);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  useGetItems();

  return (
    <Box width="80%" margin="80px auto">
      <FeaturedItemsHeader />
      <ItemTabs value={value} setValue={setValue} isNonMobile={isNonMobile} />
      <ItemGrid items={items} value={value} loading={loading} />
    </Box>
  );
}

export default ShoppingList;
