/* eslint-disable import/no-extraneous-dependencies */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import styles from './NewUser.module.scss';

const NewUser = () => {
  const history = useHistory();

  return (
    <Container className={styles.addUserContainer}>
      <Button variant="info" onClick={() => history.push('/')}>
        Users
      </Button>

      <h3 className={styles.title}>Add new user</h3>

      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="First name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Last name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Birthday" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Profile picture
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Link" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add user</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewUser;
