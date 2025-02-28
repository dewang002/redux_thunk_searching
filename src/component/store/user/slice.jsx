import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./thunk";


const initialState={
    userData : [],
    loading : false,
    error : null
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase( fetchUserData.pending , ( state ) =>{ state.loading = true })
            .addCase( fetchUserData.fulfilled, ( state, action ) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase( fetchUserData.rejected, ( state ) => {
                state.loading = false;
                state.error = {
                    message:"something went wrong"
                }
            } )
    }
})

export default userSlice.reducer;