import { configureStore } from "@reduxjs/toolkit";
import natiqSlice from "./Slice/natiq-slice";

const store = configureStore({
    reducer: {
        natiq: natiqSlice
    }
})

export default store;

