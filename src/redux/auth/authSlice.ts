import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'redux/types';

const initialState: AuthState = {
  user: {
    name: '',
    email: '',
    role: '',
    id: localStorage.getItem('userId')
      ? JSON.parse(localStorage.getItem('userId')!).id
      : '',
    step: 1,
  },
  access_token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token')!)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },

    setUserId: (state, action: PayloadAction<string>) => {
      state.user.id = action.payload;
      localStorage.setItem('userId', JSON.stringify(action.payload));
    },

    setToken: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload));
    },

    clearToken: state => {
      state.access_token = '';
      localStorage.temoveItem('token');
    },
  },
});

export const { setToken, clearToken, setEmail, setUserId } = authSlice.actions;
export const authReducer = authSlice.reducer;
