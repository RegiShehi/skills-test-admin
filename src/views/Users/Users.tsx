import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import LOADING_STATE from '../../redux/constants/common';
import styles from './Users.module.scss';
import useGetUsers from '../../hooks/users';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

const Users = () => {
  const history = useHistory();
  const { users, loading, error } = useGetUsers();

  if (loading === LOADING_STATE.pending) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <div className={styles.usersContainer}>
      <h3 className={styles.title}>Users List</h3>
      <Table hover responsive>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                <Image
                  src={user.photo_link && user.photo_link !== '' ? user.photo_link : 'https://via.placeholder.com/50'}
                  roundedCircle
                />
              </td>
              <td className={styles.test}>{user.birth_date}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.last_name}</td>
              <td>
                <Button variant="info" onClick={() => history.push(`users/${user.id}`)}>
                  Profile
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
