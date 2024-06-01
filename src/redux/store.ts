import { configureStore } from "@reduxjs/toolkit";
import followingSlice from "./slice/follwing.slice";

const store = configureStore({
    reducer : {
        follows : followingSlice.reducer
    }
})

export default store