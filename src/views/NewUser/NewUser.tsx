/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import { useState } from 'react';
import styles from './NewUser.module.scss';

interface IUserForm {
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  photo_link: string;
}

const NewUser = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState<IUserForm>({
    email: '',
    first_name: '',
    last_name: '',
    birth_date: '',
    photo_link: '',
  });

  const handleChange = (event: any) => {
    setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  return (
    <Container className={styles.addUserContainer}>
      <Button variant="info" onClick={() => history.push('/')}>
        Users
      </Button>

      <h3 className={styles.title}>Add new user</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault();

          console.log('Form values: ', formValues);
        }}
      >
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="First name" name="first_name" onChange={(e) => handleChange(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Last name" name="last_name" onChange={(e) => handleChange(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Birthday" name="birth_date" onChange={(e) => handleChange(e)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Profile picture
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Link" name="photo_link" onChange={(e) => handleChange(e)} />
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
