import {getAllFiles} from "../thunks";

export const FILES_EXTRA_REDUCERS = (builder) => {
  builder.addCase(getAllFiles.pending, (state) => {
    state.loading = true;
    state.files = null;
    state.error = "";
  });

  builder.addCase(getAllFiles.fulfilled, (state, action) => {
    if (action.payload) {
      state.files = action.payload;
      state.loading = false;
    }
  });

  builder.addCase(getAllFiles.rejected, (state, action) => {
    state.error = "Error al obtener los archivos";
  });
};
