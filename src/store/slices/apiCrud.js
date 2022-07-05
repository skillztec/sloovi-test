import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTaskAsync = createAsyncThunk('/tasks/createTaskAsync', 
async(payload) => {
	// method: 'POST',
	// Headers: {
	// 	'Content-Type': 'application/json',
	// 	'Accept': 'application/json'
	// },
	// body: {
	// 	return {}
	// }
});