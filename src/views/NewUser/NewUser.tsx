/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './NewUser.module.scss';

type Inputs = {
  email: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  photo_link: string;
};

const NewUser = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
  };

  return (
    <Container className={styles.addUserContainer}>
      <Button variant="info" onClick={() => history.push('/')}>
        Users
      </Button>

      <h3 className={styles.title}>Add new user</h3>

      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="Email"
              defaultValue=""
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
              isInvalid={!!errors.email}
            />
            {errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="First name"
              defaultValue=""
              {...register('first_name', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
              isInvalid={!!errors.first_name}
            />
            {errors.first_name && (
              <Form.Control.Feedback type="invalid">{errors.first_name.message}</Form.Control.Feedback>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Last name"
              defaultValue=""
              {...register('last_name', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
              isInvalid={!!errors.last_name}
            />
            {errors.last_name && (
              <Form.Control.Feedback type="invalid">{errors.last_name.message}</Form.Control.Feedback>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              defaultValue=""
              {...register('birth_date', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
              isInvalid={!!errors.birth_date}
            />
            {errors.birth_date && (
              <Form.Control.Feedback type="invalid">{errors.birth_date.message}</Form.Control.Feedback>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Profile picture
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Link" type="text" defaultValue="" {...register('photo_link')} />
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
