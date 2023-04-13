import { Box, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function AddToCartButton({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Button variant="contained" onClick={handleClick} color="secondary">
        <AddShoppingCartIcon />{" "}
        <Typography variant="subtitle2" ml={0.5}>
          Add to cart
        </Typography>
      </Button>
    </Box>
  );
}
