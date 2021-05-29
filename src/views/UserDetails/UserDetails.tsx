/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { RouteComponentProps, useHistory } from 'react-router';
import Col from 'react-bootstrap/Col';
import IUser from '../../api/models/user';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import useGetUsers from '../../hooks/users';
import LOADING_STATE from '../../redux/constants/common';
import styles from './UserDetails.module.scss';

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
  id: string;
}

const UserDetails: React.FC<IProps> = ({ match }) => {
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
    <Container className={styles.userDetailsContainer}>
      <Button variant="info" onClick={() => history.push('/')}>
        Users
      </Button>

      <Row className="align-items-center flex-row-reverse" style={{ marginTop: '4rem' }}>
        <Col lg="6">
          <div className={styles.aboutText}>
            <h3>{selectedUser?.full_name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora maxime autem dolor culpa, temporibus
              illum, ipsam labore blanditiis ea obcaecati dolorem eveniet? Quis velit tenetur obcaecati, perspiciatis
              sed nam?
            </p>
            <Row className={styles.aboutList}>
              <Col md="6">
                <div className={styles.media}>
                  <label>Birthday</label>
                  <p>{selectedUser?.birth_date}</p>
                </div>
                <div className={styles.media}>
                  <label>First name</label>
                  <p>{selectedUser?.first_name}</p>
                </div>
              </Col>
              <Col md="6">
                <div className={styles.media}>
                  <label>E-mail</label>
                  <p>{selectedUser?.email}</p>
                </div>
                <div className={styles.media}>
                  <label>Last name</label>
                  <p>{selectedUser?.last_name}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md="6">
          <div className={styles.aboutAvatar}>
            <img
              src={
                selectedUser?.photo_link && selectedUser.photo_link !== ''
                  ? selectedUser.photo_link
                  : 'https://bootdey.com/img/Content/avatar/avatar7.png'
              }
              title=""
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
