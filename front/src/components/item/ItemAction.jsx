import React from "react";
import { shades } from "../../theme";
import { Box } from "@mui/material";
import AddToCart from "../addTocart/AddToCart";
import WatchTrailer from "../watchTrailer/WatchTrailer";

function ItemAction({ handleAddToCart }) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxWidth={"300px"}
    >
      <AddToCart
        onClick={handleAddToCart}
        sx={{ background: shades.primary[300], color: "white" }}
      />
      <WatchTrailer />
    </Box>
  );
}

export default ItemAction;
