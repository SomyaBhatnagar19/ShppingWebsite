import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import CartSlice from "./CartSlice";

const Store = configureStore({
    reducer: {
        ui: UiSlice.reducer,
        cart : CartSlice.reducer,
    }
})
export default Store;