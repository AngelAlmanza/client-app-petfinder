import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../../interfaces/AuthInterfaces";
import { petFinderApi } from "../../api/petFinderApi";
import { removeAuthToken, setAuthToken } from "../../utils/expirationToken";

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginRequest, thunkAPI) => {
    try {
      const response = await petFinderApi.post<LoginResponse>('/login', payload);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterRequest, thunkAPI) => {
    console.log(payload);
    try {
      const response = await petFinderApi.post<RegisterResponse>('/register', payload);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await petFinderApi.post('/logout');
      removeAuthToken();
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
