import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Login from "../data/Login";

interface AuthState {
  token: string|null;
};

const initialState: AuthState = {
  token: localStorage.getItem("token"),
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<Login>) => {
        console.log(state, action);
    },

    setToken: (state : AuthState, action: any) => {

        state.token = action.token;

        //console.log(action.token + " - token in setToken");
      
        localStorage.setItem("token", action.token);

    }

  }
});

export const { reducer } = slice;

export const { login, setToken } = slice.actions;

export default slice.reducer;
