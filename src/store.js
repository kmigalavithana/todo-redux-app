import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./utilites/state/taskSlice.js";

export default configureStore({
    reducer: {
        tasks: taskReducer
    }
})