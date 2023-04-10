import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { shades } from "../../theme";
import Image from "../../components/ui/Image";

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
  const totalPrice = cart?.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);
  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={() => dispatch(setIsCartOpen({}))}
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
              return (
                <Box key={`${item.attributes.name}-${item.id}`}>
                  <FlexBox p={"15px 0"}>
                    <Box flex={"1 1 40%"}>
                      <Image
                        alt={item?.name}
                        width={"123px"}
                        height={"164px"}
                        src={item?.attributes?.image.data.attributes.url}
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
                          <DeleteIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>
                        {item.attributes.shortDescription}
                      </Typography>
                      <FlexBox m="15px 0">
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          border={`1.5px solid ${shades.neutral[500]}`}
                        >
                          <IconButton
                            onClick={() =>
                              dispatch(decreaseCount({ id: item.id }))
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
                          ${item.attributes.price}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              );
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
    </Drawer>
  );
}

export default CartMenu;
