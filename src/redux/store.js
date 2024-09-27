import { configureStore } from "@reduxjs/toolkit";
import { dealsReducer } from "./deals/slice.js";
import { authReducer } from "./auth/slice";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
	persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
	key: "authSlice",
	storage,
	whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		deals: dealsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
