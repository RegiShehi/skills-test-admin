import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import IUser from '../../api/models/user';
import LOADING_STATE from '../constants/common';
import SLICES from '../constants/slices';
import TYPE_PREFIXES from '../constants/typePrefixes';

interface UsersState {
  users: IUser[] | null;
  loading: LOADING_STATE;
  error: string | null;
}

const initialState: UsersState = {
  users: null,
  loading: LOADING_STATE.idle,
  error: null,
};

export const fetchUsers = createAsyncThunk(TYPE_PREFIXES.fetchUsers, async () => {
  const response = await agent.Users.list();

  return response.users;
});

export const usersSlice = createSlice({
  name: SLICES.users,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      if (state.loading === LOADING_STATE.idle) {
        state.loading = LOADING_STATE.pending;
      }
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = LOADING_STATE.idle;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = 'Failed to fetch users';
      state.loading = LOADING_STATE.idle;
    });
  },
});

export default usersSlice.reducer;
