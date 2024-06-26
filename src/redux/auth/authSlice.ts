import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'redux/types';

const initialState: AuthState = {
  user: {
    name: '',
    email: '',
    role: '',
    step: 1,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
  },
});

export const { setEmail } = authSlice.actions;
export const authReducer = authSlice.reducer;
