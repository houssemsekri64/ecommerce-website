import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../state";
import Image from "../ui/Image";
import ItemAction from "./ItemAction";
const selectCart = (state) => state.cart.cart;
function Item({ item, width }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;
  const url = image.data.attributes.url;

  return (
    <Box width={width}>
      <Box
        position={"relative"}
        onClick={() => navigate(`/item/${item.id}`)}
        sx={{ cursor: "pointer" }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <Image
          alt={item.name}
          width={"300px"}
          height={"400px"}
          src={url}
          ImageStyle={{ cursor: "pointer", objectFit: "cover" }}
        />
        <Box
          position={"absolute"}
          top={0}
          backgroundColor={isHover ? "rgba(0,0,0,0.7)" : "rgba(0.0.0.0,0)"}
          width={"300px"}
          height={"400px"}
          display={isHover ? "grid" : "none"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Button variant="contained" color="info">
            <Typography color={"white"} variant="subtitle1">
              More details{" "}
            </Typography>{" "}
          </Button>{" "}
        </Box>
      </Box>

      <ItemAction
        handleAddToCart={() => {
          if (
            cart.length > 0 &&
            cart.find((cartItem) => cartItem.id === item.id)
          ) {
            return;
          }
          dispatch(addToCart({ item: { ...item, count: 1 } }));
          return "success";
        }}
      />
      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^ ./, (str) => str.toUpperCase())}
        </Typography>
        <Typography> {name} </Typography>
        <Typography fontWeight={"bold"}> ${price} </Typography>
      </Box>
    </Box>
  );
}

export default Item;
