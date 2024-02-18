import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const mydata = createAsyncThunk("projects", async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const datas = await data.json()
    return datas
})

const slice = createSlice({
    name: "projects",
    initialState: {
        data: 0
        ,
        number: 0
    }
    ,
    reducers: {
        increment: (state, action) => {
            // console.log(state.number)
            state.number = state.number + action.payload
        }
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(mydata.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})
export const { increment } = slice.actions
export default slice.reducer