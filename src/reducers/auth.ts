import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Login from "../data/Login";

interface AuthState {
  username: string | undefined;
  password: string | undefined;
  token: string | undefined;
}

const initialState: AuthState = {
  token: undefined,
  username: undefined,
  password: undefined,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<Login>) => {
        state.username = action.payload.username;
        state.password = action.payload.password;
    },

    setToken: (state : AuthState, action: any) => {

        state.token = action.payload;

    }

  }
});

export const { reducer } = slice;

export const { login } = slice.actions;

export default slice.reducer;
