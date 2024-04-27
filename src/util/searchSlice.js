import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers:{
     cacheResults :(state, action)=>
    //  {
    //    state =  Object.assign(state, action.payload,); //storing as key value pair as in for ip: all results
    //  }
    ({
        ...state,
        ...action.payload
    })
    }

});


export default searchSlice.reducer ;
export const {cacheResults} = searchSlice.actions;