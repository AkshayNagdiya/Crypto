import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
    name: "coin",
    initialState: {
        coins: [],
        coin: {},
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    reducers: {},
    extraReducers: (builders) => {

        builders.addCase(fetchTrending.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
            .addCase(fetchTrending.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.coins = action.payload
            })
            .addCase(fetchTrending.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })

            .addCase(fetchCoin.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })
            .addCase(fetchCoin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.coin = action.payload
            })
            .addCase(fetchCoin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })

    }
});

export default coinSlice.reducer;

//Fetch Trending Coins//

export const fetchTrending = createAsyncThunk("FETCH/TRENDING", async () => {
    try {
        return await coinService.fetchTrendingCoins()
    } catch (error) {
        console.log(error)
    }
});

export const fetchCoin = createAsyncThunk("FETCH/COIN", async (id) => {
    try {
        return await coinService.fetchCoin(id)
    } catch (error) {
        console.log(error)
    }
})