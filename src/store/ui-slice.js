import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
    name: "ui",
    initialState: {
        cartIsVisible: false,
        notification : null,
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state,action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message : action.payload.message
            }
        }
    }
});

export const UiActions = UiSlice.actions;
export default UiSlice;