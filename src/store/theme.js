import { createSlice } from "@reduxjs/toolkit"

const Model = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggle: state => (state === "light" ? "dark" : "light"),
  },
})

export const currentTheme = state => state.theme
export const { toggle } = Model.actions
export default Model.reducer
