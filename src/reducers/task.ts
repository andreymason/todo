import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import Task from '../data/Task';

interface TaskState {
    task: Task | undefined;
    isEdit: boolean
}

const initialState: TaskState = {
    task: undefined,
    isEdit: false,
};

export const slice = createSlice({
    name: 'task',
    initialState,

    reducers: {

        taskEditInit: (state : TaskState, action: PayloadAction<Task>) => {
            state.task = action.payload;
            state.isEdit = true;
        },

        taskEdit: (state: TaskState, action: PayloadAction<any>) => {
            state.task = {
                ...state.task,
                ...action.payload
            }
        },

        taskEditComplete: (state : TaskState) => {
            state.task = undefined;
            state.isEdit = false;
        },

    }
});

export const { reducer } = slice;

export const { taskEditInit, taskEdit, taskEditComplete } = slice.actions;

export default slice.reducer;