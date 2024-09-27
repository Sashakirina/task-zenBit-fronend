import { createSlice } from "@reduxjs/toolkit";
import { fetchDeals } from "./operations";

const dealsSlice = createSlice({
	name: "deals",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDeals.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDeals.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchDeals.rejected, (state) => {
				console.log("rejected");
				state.error = true;
			});
	},
});

export const dealsReducer = dealsSlice.reducer;
