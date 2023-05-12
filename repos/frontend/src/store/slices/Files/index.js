import {createSlice} from "@reduxjs/toolkit";
import {FILES_EXTRA_REDUCERS} from "./extra-reducers/files";

const initialState = {
  files: null,
  error: "",
  loading: false,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    FILES_EXTRA_REDUCERS(builder);
  },
});

export const {} = filesSlice.actions;
export default filesSlice.reducer;
export * from "./thunks";
