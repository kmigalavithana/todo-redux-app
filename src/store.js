import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./utilites/state/taskSlice.js";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, taskReducer)

export const store = configureStore({
    reducer: {
        state: persistedReducer,
    }
})

export const persistor = persistStore(store);