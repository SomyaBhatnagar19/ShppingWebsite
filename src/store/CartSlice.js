import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.itemId === id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];

        if (existingItem.quantity === 1) {
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
          state.items.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity--;
          state.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;