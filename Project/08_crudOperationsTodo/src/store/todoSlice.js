import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: [],
    idDetail: {
        id: null,
        name: "",
        email: ""
    },
}


export const todoSlice = createSlice({
    name: "detailTodo",
    initialState,
    reducers: {
        addStore: (state, action) => {
            state.details = action.payload

        },
        deleteList: (state, action) => {
            state.details = state.details.filter((arr) => (arr.id !== action.payload))
        },
        editId: (state, action) => {
            state.idDetail.id = action.payload.id;
            state.idDetail.name = action.payload.name;
            state.idDetail.email= action.payload.email;

        },
    }
})

export const { addStore, deleteList, editId } = todoSlice.actions;
export default todoSlice.reducer

