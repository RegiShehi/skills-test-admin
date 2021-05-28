/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { RouteComponentProps, useHistory } from 'react-router';
import IUser from '../../api/models/user';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import useGetUsers from '../../hooks/users';
import LOADING_STATE from '../../redux/constants/common';

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  id: string;
}

const UserProfile: React.FC<IProps> = ({ match }) => {
  const { id } = match.params;
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const { users, loading, error } = useGetUsers();
  const history = useHistory();

  useEffect(() => {
    setSelectedUser(users?.find((user) => user.id === +id) ?? null);
  }, [id, users]);

  if (loading === LOADING_STATE.pending) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <>
      <Button onClick={() => history.push('/')}>Go back</Button>
      <h3>User profile: {selectedUser?.id}</h3>
    </>
  );
};

export default UserProfile;
