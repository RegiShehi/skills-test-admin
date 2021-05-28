import { useEffect } from 'react';
import LOADING_STATE from '../../redux/constants/common';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { fetchUsers } from '../../redux/slices/userSlice';

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading === LOADING_STATE.pending) {
    return <>Loading</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <>
      <h3>Users list</h3>
      <div>{users.map((user) => user.full_name)}</div>
    </>
  );
};

export default Users;
