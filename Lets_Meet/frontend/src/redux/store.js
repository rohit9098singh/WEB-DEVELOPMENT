import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, persistor, useSelector, useDispatch };

{/**
import { configureStore } from "@reduxjs/toolkit";
What it does: Imports configureStore from Redux Toolkit, which is an easy way to set up a Redux store with sensible defaults.
Why it’s needed: Simplifies the process of creating the Redux store.
What happens if skipped: You would need to use the older createStore method, which is more complex.

========= SECOND PART ========
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";
What it does: Imports useDispatch and useSelector from React-Redux for interacting with the store in components.

========THIRD ========
import { persistStore, persistReducer } from "redux-persist";
Enables redux-persist to handle the persistence of the state.
What happens if skipped: State persistence won’t work.
     */}