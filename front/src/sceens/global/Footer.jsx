import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import Logo from "../../components/logo/Logo";

function Footer() {
  return (
    <Box
      margin={"auto"}
      marginTop="50px"
      padding="40px 0"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={{
        xs: "90%",
        md: "700px",
      }}
    >
      <Logo />
      <Typography>Copyright © houssem sekri Made with ❤️ </Typography>
    </Box>
  );
}

export default Footer;
