import { useEffect } from 'react';
import { fetchUsers } from './redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.usersReducer.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <>{users.map((user) => user.full_name)}</>;
};

export default App;
