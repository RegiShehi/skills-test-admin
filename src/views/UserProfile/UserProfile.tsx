/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  id: string;
}

const UserProfile: React.FC<IProps> = ({ match }) => {
  const { id } = match.params;

  console.log('Id: ', id);

  return <div>User profile</div>;
};

export default UserProfile;
