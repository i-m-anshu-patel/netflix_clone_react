import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const userSlice = createSlice({
    name: "user",
    initialState:  {
        users: []
    },
    reducers: {
        loginUser: (state, action) => {
            state.users.push(action.payload)
        },
        logoutUser: (state) => {
            state.users.pop();
        }
    }
})

export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;