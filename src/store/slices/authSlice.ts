import {createSlice} from '@reduxjs/toolkit';
import { login, register } from '../thunks/authThunks';
import { getAuthToken } from '../../utils/expirationToken';
import { Profile, User } from '../../interfaces/AuthInterfaces';

interface AuthState {
  token: string;
  isLoading: boolean;
  user: User | null;
  profile: Profile | null;
}

const initialState: AuthState = {
  token: getAuthToken(),
  isLoading: false,
  user: null,
  profile: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload!.token;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload!.user;
      state.profile = action.payload!.profile;
      state.token = action.payload!.token;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// export const {} = authSlice.actions;
