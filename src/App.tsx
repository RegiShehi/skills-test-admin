import { useEffect, useState } from 'react';
import agent from './api/agent';
import IUser from './api/models/user';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await agent.Users.list();

      setUsers(data.users);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <>{users.map((user) => user.full_name)}</>;
};

export default App;
