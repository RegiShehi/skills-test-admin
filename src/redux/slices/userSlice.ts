import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import IUser from '../../api/models/user';
import { useAppDispatch } from '../hooks/hooks';

enum LOADING_STATE {
  idle = 'idle',
  pending = 'pending',
}

interface UsersState {
  users: IUser[];
  loading: LOADING_STATE;
}

const initialState: UsersState = {
  users: [],
  loading: LOADING_STATE.idle,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersLoading: (state) => {
      if (state.loading === LOADING_STATE.idle) {
        state.loading = LOADING_STATE.pending;
      }
    },
    usersReceived: (state, action: PayloadAction<IUser[]>) => {
      if (state.loading === LOADING_STATE.pending) {
        state.loading = LOADING_STATE.idle;
        state.users = action.payload;
      }
    },
  },
});

export const { usersLoading, usersReceived } = usersSlice.actions;

export const fetchUsers =
  () =>
  async (dispatch = useAppDispatch()) => {
    try {
      dispatch(usersLoading());

      const response = await agent.Users.list();

      dispatch(usersReceived(response.users));
    } catch (error) {
      console.log(error);
    }
  };

export default usersSlice.reducer;
