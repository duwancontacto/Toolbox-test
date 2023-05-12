import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFiles} from "../../../services/files";
const PREFIX = "files";
export const getAllFiles = createAsyncThunk(
  `${PREFIX}`,
  async (fileName, thunkAPI) => {
    try {
      const files = await getFiles(fileName);

      return files.data;
    } catch (error) {
      return error;
    }
  }
);
