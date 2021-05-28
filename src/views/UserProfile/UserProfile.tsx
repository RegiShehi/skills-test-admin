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

  return <h3>User profile: {id}</h3>;
};

export default UserProfile;
