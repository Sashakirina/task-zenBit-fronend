import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./operations";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {
			name: null,
			email: null,
		},
		token: null,
		isLoggedIn: false,
	},
	extraReducers: (builder) =>
		builder
			.addCase(signup.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(signup.rejected, (state) => {
				state.isLoggedIn = false;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(login.rejected, (state) => {
				state.isLoggedIn = false;
			}),
});

export const authReducer = authSlice.reducer;
