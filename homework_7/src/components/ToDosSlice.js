import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ToDosSlice = createSlice({
  name: "toDos",
  initialState: {
    value: {
      entities: [],
      status: "idle",
      error: false
    }
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.value.status = "loading";
      })
      .addCase(fetchToDos.fulfilled, (state, { payload: toDos }) => {
        state.value.status = "success";
        state.value.entities = toDos;
        state.value.error = false;
      })
      .addCase(fetchToDos.rejected, (state) => {
        state.value.status = "failure";
        state.value.error = true;
      });
  }
});

const API_URL = "https://jsonplaceholder.typicode.com/todos?userId=1";

export const fetchToDos = createAsyncThunk(
  "toDos/fetchToDos",
  async function () {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed, status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  }
);

export default ToDosSlice.reducer;
