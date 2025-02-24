import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    storeTask: (state,action) => {
      state.tasks.push(action.payload)
    },
    removeTask: () => {},
  },
});

export const { storeTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
