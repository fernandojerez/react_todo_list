import { createSlice } from "@reduxjs/toolkit"

const Model = createSlice({
  name: "todo_list",
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, payload],
    removeItem: (state, { payload }) => state.filter(itm => itm.id !== payload),
    updateItem: (state, { payload }) =>
      state.map(itm => (itm.id === payload.id ? payload : itm)),
  },
})

export const todoList = state => state.todo_list
export const getItem = id => state => state.todo_list.find(itm => (itm.id = id))
export const { addItem, removeItem, updateItem } = Model.actions
export default Model.reducer
