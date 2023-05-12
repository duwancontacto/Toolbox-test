import {configureStore} from "@reduxjs/toolkit";

import files from "./slices/Files";
export const store = configureStore({
  reducer: {
    files,
  },
});
