import { createSlice } from '@reduxjs/toolkit';
import Task from '../data/Task';
import type { PayloadAction } from '@reduxjs/toolkit';

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

    updateTaskName: (state : TasksState, action: PayloadAction<[number, string]>) => { 

        console.log("Update task name");
        
        const [taskId, newTaskName] = action.payload;

        const index = state.tasks.findIndex(updatedTask => updatedTask.id === taskId); 

        const task = state.tasks[index]!;

        const newTask = {...task, name: newTaskName};
        
        const newArray = [...state.tasks.slice(0, index), newTask, ...state.tasks.slice(index + 1)]; 

        state.tasks = newArray;

    },

    fetchTasks: (state: TasksState, action: PayloadAction) => {
      console.log(state);

      console.log(action);
    }

  }
});

export const { reducer } = slice;

export const { setTasks, updateTaskName, fetchTasks} = slice.actions;

export default slice.reducer;