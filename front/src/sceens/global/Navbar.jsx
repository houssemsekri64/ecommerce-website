import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, IconButton } from "@mui/material";
import {
  MenuOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"60px"}
      backgroundColor="rgba(255,255,0.5)"
      color={"black"}
      position={"fixed"}
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
          color={shades.secondary[500]}
          component={"a"}
        >
          Ecommer
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
          <IconButton color={"black"}>
            <ShoppingBagOutlined />
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
