import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: 'product',
	reducers: {
		updateFavorites: (state, { payload }) => {
			return {
				...state,
				favorites: [...payload],
			}
		},
	},
	initialState:[],
})

export default favoriteSlice.reducer

export const { updateFavorites } = favoriteSlice.actions
