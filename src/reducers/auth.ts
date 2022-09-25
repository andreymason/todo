import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string|null;
};

const initialState: AuthState = {
  token: localStorage.getItem("token"),
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state : AuthState, action: any) => {

        console.log(state);

        console.log(action.payload);
        
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
