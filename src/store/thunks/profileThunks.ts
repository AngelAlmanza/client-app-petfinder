import { createAsyncThunk } from "@reduxjs/toolkit";
import { petFinderApi } from "../../api/petFinderApi";
import { Profile, ProfileResponse } from "../../interfaces/ProfileInterfaces";

export const getProfileData = createAsyncThunk(
  'profile/getProfileData',
  async (_, thunkAPI) => {
    try {
      const response = await petFinderApi.get<ProfileResponse>('profile');
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfileData = createAsyncThunk(
  'profile/updateProfileData',
  async (data: { name: string, city: string }, thunkAPI) => {
    try {
      const response = await petFinderApi.put<Profile>('profile/update-profile', data);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);