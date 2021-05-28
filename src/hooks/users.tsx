import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { fetchUsers } from '../redux/slices/userSlice';

const useGetUsers = () => {
  const dispatch = useAppDispatch();

  const { users, loading, error } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  return { users, loading, error };
};

export default useGetUsers;
