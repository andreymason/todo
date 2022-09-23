import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import Task from '../data/Task';

interface TasksState {
    tasks: Task[];
  }
  
const initialState: TasksState = {
    tasks: [] as Task[]
};

export const slice = createSlice({
  name: 'tasks',
  initialState,
  
  reducers: {

    setTasks: (state : TasksState, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
    },

    updateTask: (state : TasksState, action: PayloadAction<Task>) => {
        const updatedTask = action.payload;

        const index = state.tasks.findIndex(task => task.id === updatedTask.id);

        state.tasks = [
            ...state.tasks.slice(0, index),
            updatedTask,
            ...state.tasks.slice(index + 1)
        ];

    },

    fetchTasks: (state: TasksState, action: PayloadAction) => {
      console.log(state);

      console.log(action);
    }

  }
});

export const { reducer } = slice;

export const { setTasks, updateTask } = slice.actions;

export default slice.reducer;