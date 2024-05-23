import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return {
          ...state,
          cartItems: [action.payload, ...state.cartItems],
        };
      }
    },

    incrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },

    decrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },

    removeCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
