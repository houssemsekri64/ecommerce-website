import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { setIsCartOpen } from "../../state";
import { Close } from "@mui/icons-material";

function Menu({ openMenu, setOpenMenu }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Drawer
      open={openMenu}
      anchor="right"
      onClose={() => setOpenMenu(!openMenu)}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <Stack width={"300px"} mt={5} ml={3} spacing={2}>
        <Box alignSelf={"end"} marginRight={3} sx={{ cursor: "pointer" }}>
          <Close />
        </Box>
        <Button variant="text" onClick={() => navigate("/")}>
          <Typography> Home </Typography>
        </Button>
        <Button variant="text" onClick={() => navigate("/checkout")}>
          <Typography> Checkout </Typography>
        </Button>
        <Button
          variant="text"
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(setIsCartOpen({}))}
        >
          <Typography> Cart </Typography>
        </Button>
        <Button variant="text">
          <HashLink
            to={`${pathname}#contact`}
            smooth
            style={{ textDecoration: "none", color: "unset" }}
          >
            {" "}
            <Typography> Contact us </Typography>{" "}
          </HashLink>
        </Button>
      </Stack>
    </Drawer>
  );
}

export default Menu;
