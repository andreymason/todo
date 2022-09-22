import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
  } from 'react-redux';
  //import { applyMiddleware } from 'redux';
  import createSagaMiddleware from 'redux-saga';
  import type { TypedUseSelectorHook } from 'react-redux';
  import type { ThunkAction } from 'redux-thunk';
  import { configureStore } from '@reduxjs/toolkit';
  import type { Action } from '@reduxjs/toolkit';
  import { rootReducer } from './rootReducer';
  import tasksSaga from '../sagas/tasks';

  const sagaMiddleware = createSagaMiddleware()
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  }, 
  );

  sagaMiddleware.run(tasksSaga);
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
  
  export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  
  export const useDispatch = () => useReduxDispatch<AppDispatch>();
  