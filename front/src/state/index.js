import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id ? el.count++ : el
      );
    },
    deacreaseCount: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id && el.count > 1 ? el.count-- : el
      );
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  deacreaseCount,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
