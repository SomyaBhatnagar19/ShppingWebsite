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
      const existingItem = state.items.find((item) => item.productId === newItem.id);
      if (!existingItem) {
        state.items.push({
          productId: newItem.id,
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
      const productId = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.productId === productId);

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
increaseItemQuantity(state, action) {
  const productId = action.payload;
  const existingItem = state.items.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity++;
    existingItem.totalPrice += existingItem.price;
    state.totalQuantity++;
    state.totalPrice += existingItem.price;
  }
},
decreaseItemQuantity(state, action) {
  const productId = action.payload;
  const existingItem = state.items.find((item) => item.productId === productId);
  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity--;
    existingItem.totalPrice -= existingItem.price;
    state.totalQuantity--;
    state.totalPrice -= existingItem.price;
  } else if (existingItem && existingItem.quantity === 1) {
    // If the quantity is 1, remove the item from the cart
    state.totalQuantity--;
    state.totalPrice -= existingItem.price;
    state.items = state.items.filter((item) => item.productId !== productId);
  }
},

  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;