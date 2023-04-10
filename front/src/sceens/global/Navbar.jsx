import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  MenuOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";

import { setIsCartOpen } from "../../state";

import Logo from "../../components/logo/Logo";
function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"60px"}
      backgroundColor="rgba(255,255,255,1)"
      color={"black"}
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={1}
    >
      <Box
        width={{ xs: "95%", md: "80%" }}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo />
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          columnGap={"20px"}
          zIndex={"2"}
        >
          <IconButton color={"black"}>
            <SearchOutlined />
          </IconButton>
          <IconButton color={"black"}>
            <PersonOutline />
          </IconButton>
          <IconButton
            color={"black"}
            onClick={() => dispatch(setIsCartOpen({}))}
          >
            <ShoppingBagOutlined />
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-Badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            />
          </IconButton>
          <IconButton color={"black"}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
