import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  deacreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { shades } from "../../theme";

const FlexBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart.reduce((total, item) => {
    return total * item.attributes.price;
  }, 0);
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      bgcolor="rgba(0,0,0,0.4)"
      zIndex={10}
      width={"100%"}
      height={"100%"}
      position={"fixed"}
      left={"0"}
      right={"0"}
      top={"0"}
      overflow={"auto"}
    >
      <Box
        position={"fixed"}
        right={"0"}
        top={"0"}
        width={"max(400px,30%)"}
        backgroundColor="white"
        height={"100%"}
      >
        <Box padding={"30px"} overflow={"auto"} height={"100%"}>
          <FlexBox mb={"15px"}>
            <Typography variant="h3">Shopping Bag ({cart.length}) </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              {" "}
              <CloseIcon />{" "}
            </IconButton>
          </FlexBox>
          <Box>
            {cart.map((item) => {
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p={"15px 0"}>
                  <Box flex={"1 1 40%"}>
                    <img
                      alt={item?.name}
                      width={"123px"}
                      height={"164px"}
                      src={`http:/localhost:1337${item?.attributes?.image?.data?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex={"1 1 60%"}>
                    <FlexBox mb="5px">
                      <Typography fontWeight={"bold"}>
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(deacreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight={"bold"}>
                        {item.attributes.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>;
            })}
          </Box>
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight={"bold"}>SUBTOTAL</Typography>
              <Typography fontWeight={"bold"}>${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                background: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartMenu;