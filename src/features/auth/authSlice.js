import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";



const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userExist ? userExist : null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true,
                state.isError = false,
                state.isSuccess = false,
                state.message = ""
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isError = false,
                    state.isSuccess = true,
                    state.user = action.payload
                state.message = ""

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.isSuccess = false,
                    state.message = action.payload;
            })

            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "";

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
                state.user = null
            })


    }
});

export default authSlice.reducer;

//REGISTER USER//

export const registerUser = createAsyncThunk("AUTH/REGISTER",
    async (formData, thunkAPI) => {
        try {
            return await authService.register(formData);
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
    });

//LOGIN USER//

export const loginUser = createAsyncThunk("AUTH/LOGIN",
    async (formData, thunkAPI) => {
        try {
            return await authService.login(formData);
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
    });

//LOGOUT//

export const logOutUser = createAsyncThunk("AUTH/LOGOUT",
       async ()=>{
        localStorage.removeItem('user')
       }
)