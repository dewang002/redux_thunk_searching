import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("user/fetchUserData", async( _, rejectWithValue)=>{
    try{
        const res = await axios(`https://jsonplaceholder.typicode.com/users`)
        return res.data
    }catch(err){
       return rejectWithValue("")
    }
})
