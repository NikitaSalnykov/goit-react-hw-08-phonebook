import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './initialState';
import {
  createUserThunk,
  getUserThunk,
  loginUserThunk,
  logoutUserThunk,
} from './thunk';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  state.isRefreshing = false;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(createUserThunk.fulfilled, handleFulfilledCreate)
      .addCase(logoutUserThunk.fulfilled, handleFulfilledLogout)
      .addCase(loginUserThunk.fulfilled, handleFulfilledLogin)
      .addCase(getUserThunk.pending, handlePending)
      .addCase(getUserThunk.rejected, handleRejected)
      .addCase(getUserThunk.fulfilled, handleRefreshUser);
  },
});

export const authReducer = authSlice.reducer;
