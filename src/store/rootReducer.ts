import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from '../../src/reducers/auth';
import { reducer as tasksReducer } from '../../src/reducers/tasks';

export const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});
