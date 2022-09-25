import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
  } from 'react-redux';
  import createSagaMiddleware from 'redux-saga';
  import type { TypedUseSelectorHook } from 'react-redux';
  import type { ThunkAction } from 'redux-thunk';
  import { configureStore } from '@reduxjs/toolkit';
  import type { Action } from '@reduxjs/toolkit';


  import { rootReducer } from './rootReducer';
  import { rootSaga } from '../sagas/';

  const sagaMiddleware = createSagaMiddleware();
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
  }
  );


  sagaMiddleware.run(rootSaga);
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
  
  export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  
  export const useDispatch = () => useReduxDispatch<AppDispatch>();
  