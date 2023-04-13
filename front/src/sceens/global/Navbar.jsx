import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { MenuOutlined, ShoppingCart } from "@mui/icons-material";

import { setIsCartOpen } from "../../state";

import Logo from "../../components/logo/Logo";
import Search from "../../components/search/Search";
import Menu from "./Menu";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"120px"}
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={900}
      backgroundColor="background.default"
      boxShadow={2}
    >
      <Box
        width={{ xs: "95%", md: "80%" }}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        <Box
          width={"100%"}
          maxWidth={{
            sx: "150px",
            md: "600px",
          }}
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          gap={1}
          justifyContent={"space-between"}
          alignItems={{
            xs: "start",
            md: "center",
          }}
        >
          <Logo />
          <Search />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          columnGap={"20px"}
          zIndex={"2"}
        >
          <IconButton
            color={"black"}
            onClick={() => dispatch(setIsCartOpen({}))}
          >
            <ShoppingCart />
            <Badge
              badgeContent={cart.length}
              color="primary"
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
            <MenuOutlined onClick={() => setOpenMenu(!openMenu)} />
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
