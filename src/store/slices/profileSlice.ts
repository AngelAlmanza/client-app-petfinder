import { createSlice } from '@reduxjs/toolkit';
import { Profile } from '../../interfaces/ProfileInterfaces';
import { getProfileData, updateProfileData } from '../thunks/profileThunks';

interface ProfileState {
  profile: Profile | null;
  isLoading: boolean;
}

const initialState: ProfileState = {
  profile: null,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: builder => {
    // Get profile data
    builder.addCase(getProfileData.fulfilled, (state, action) => {
      if (!action.payload?.profile) return;
      state.profile = action.payload.profile;
    });
    builder.addCase(getProfileData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfileData.rejected, (state) => {
      state.isLoading = false;
    });

    // Update profile data
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.profile = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  setProfile,
} = profileSlice.actions;
