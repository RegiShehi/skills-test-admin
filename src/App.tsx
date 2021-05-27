import { useEffect } from 'react';
import { fetchUsers } from './redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import LOADING_STATE from './redux/constants/common';
import NavBar from './components/NavBar/NavBar';
import MainContent from './components/MainContent/MainContent';

const App = () => {
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
      <NavBar />
      <MainContent>{users.map((user) => user.full_name)}</MainContent>
    </>
  );
};

export default App;
