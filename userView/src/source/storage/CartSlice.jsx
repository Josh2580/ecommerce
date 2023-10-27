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
      const item = action.payload;
      const theIndex = state.cartItems.findIndex((obj) => obj.id == item.id);

      state.cartItems[theIndex].quantity =
        Number(state.cartItems[theIndex].quantity) +
        Number(action.payload.quantity);
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // state.cartItems = [action.payload];
    },

    updateCart: (state, action) => {
      // state.cartItems = state.cartItems.filter(
      //   (storedItem) => storedItem !== action.payload
      // );
      const updated = state.cartItems.filter(
        (storedItem) => storedItem !== action.payload
      );
      console.log(updated);
      console.log(action.payload);

      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // state.cartItems = [action.payload];
    },

    deleteCart: (state) => {
      state.cartItems = localStorage.removeItem("cartItems");
      state.cartItems = [];
    },
  },
});

export const { addToCart, deleteCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;

{
  /*
      COMMENT FOR EXTRA CODE IN MANAGING ADD TO CART

// localStorage.setItem("cartItems", JSON.stringify([action.payload]));
      //   localStorage.setItem("accessToken", JSON.stringify(action.payload.data));
      // console.log(action.payload);

      // state.cartItems.push(action.payload);
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // console.log(action.payload);
      // const item = action.payload;
      // const existItem = state.cartItems.find((x) => x.id === item.id);
      // console.log(action.payload.totalQuantity);
      // if (existItem) {
      //   const theIndex = state.cartItems.findIndex((obj) => obj.id == item.id);
      //   if (action.payload.selectedQuantity <= action.payload.quantity) {
      //     state.cartItems[theIndex].quantity =
      //       Number(state.cartItems[theIndex].quantity) +
      //       Number(action.payload.quantity);
      //   }
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // } else { }

*/
}
