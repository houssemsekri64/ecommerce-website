import React from "react";
import logo from "../../assets/logo/logo192.png";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import Image from "../ui/Image";
import { Box, Typography } from "@mui/material";

function Logo() {
  const navigate = useNavigate();
  return (
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
      <Image src={logo} width={"50px"} height={"50px"} />
      <Typography variant="h4"> Game Store </Typography>
    </Box>
  );
}

export default Logo;
