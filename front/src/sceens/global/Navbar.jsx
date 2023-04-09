import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import {
  MenuOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import Image from "../../components/Image";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"60px"}
      backgroundColor="rgba(255,255,255,0.5)"
      color={"black"}
      position={"sticky"}
      top={"0"}
      left={"0"}
      zIndex={1}
    >
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          color={shades.primary[300]}
          component={"a"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="10px"
        >
          <Image src="logo192.png" width={"50px"} height={"50px"} />
          <Typography variant="h3"> Game Store </Typography>
        </Box>
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
