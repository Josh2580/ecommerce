import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
      //   localStorage.setItem("accessToken", JSON.stringify(action.payload.data));
      // console.log(action.payload);

      state.cartItems = action.payload;
    },

    deleteCart: (state) => {
      state.cartItems = localStorage.removeItem("cartItems");
      state.cartItems = [];
    },
  },
});

export const { addToCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;
