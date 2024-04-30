import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../../interfaces/AuthInterfaces";
import { petFinderApi } from "../../api/petFinderApi";

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginRequest, thunkAPI) => {
    try {
      const response = await petFinderApi.post<LoginResponse>('/login', payload);
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
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
