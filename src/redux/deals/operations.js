import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "";

export const fetchDeals = createAsyncThunk(
	"deals/fetchDeals",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/deals");
			console.log(response);
			return response.data;
		} catch (error) {
			console.log("error" + error);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
