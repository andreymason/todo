import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: ""
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state : AuthState, action: any) => {

        state.token = action.payload;
        
    }
  }
});

export const { reducer } = slice;

export const { login } = slice.actions;

export default slice.reducer;
