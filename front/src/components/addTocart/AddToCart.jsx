import { useState } from "react";
import AddToCartSnackbar from "./AddToCartSnackbar";
import AddToCartButton from "./AddToCartButton";
import { setIsCartOpen } from "../../state";
import { useDispatch } from "react-redux";

function AddToCart({ onClick }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    const result = onClick();
    setMessage(
      result === "success"
        ? "Item added with success"
        : "Item already in the cart"
    );
    setSeverity(result === "success" ? "success" : "info");
    setOpen(true);
    dispatch(setIsCartOpen({}));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddToCartButton onClick={handleClick} />
      <AddToCartSnackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
    </>
  );
}

export default AddToCart;
