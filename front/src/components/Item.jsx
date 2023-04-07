import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";
import { addToCart } from "../state";
import { variable } from "../variable/variable";
import Image from "./Image";

function Item({ item, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();
  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Image
          alt={item.name}
          width={"300px"}
          height={"400px"}
          src={`${variable.serverUrl}${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          ImageStyle={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton
                onClick={() =>
                  setCount((prevCount) => Math.max(prevCount - 1, 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ background: shades.primary[300], color: "white" }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
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
