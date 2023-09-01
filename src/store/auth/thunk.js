import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewUser, getUser, loginUser, logoutUser } from "services/swaggerAPI";

export const createUserThunk = createAsyncThunk('auth/create', (data) =>
createNewUser(data))

export const loginUserThunk = createAsyncThunk('auth/login', (data) =>
loginUser(data))


export const logoutUserThunk = createAsyncThunk('auth/logout', () =>
logoutUser())

export const getUserThunk = createAsyncThunk('auth/get', (_, thunk) =>
getUser(_, thunk))

