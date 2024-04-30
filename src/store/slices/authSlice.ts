import {createSlice} from '@reduxjs/toolkit';
import { login, register } from '../thunks/authThunks';
import { getExpirationToken, getToken, setExpirationToken } from '../../utils/expirationToken';
import { User } from '../../interfaces/AuthInterfaces';

interface AuthState {
  token: string;
  expiration: string | null;
  isLoading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  token: getToken(),
  expiration: getExpirationToken(),
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload!.token || '';
      state.expiration = setExpirationToken(action.payload?.token || '');
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
