import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { registroEmailPasswordName } from '../action/action';
import { useDispatch } from 'react-redux';
import { useForm } from '../hook/useForm';
import { Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

const Register = () => {
  const dispatch = useDispatch();

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //     repeatpassword: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required(),
  //     email: Yup.string().email().required(),
  //     password: Yup.string()
  //       .required()
  //       .oneOf([Yup.ref('repeatpassword')]),
  //     repeatpassword: Yup.string().required(),
  //   }),
  //   onSubmit: (data) => {
  //     console.log(data);
  //   },
  // });

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // formik.handleSubmit();
    console.log(name, password, password2);
    dispatch(registroEmailPasswordName(email, password, name));
  };

  return (
    <Container className='mt-5'>
      <Card className='d-flex justify-content-center align-middle'>
        <Container className='mt-4 p-3'>
          <h2>Regístrate</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='name'
                placeholder='Nombre'
                name='name'
                value={name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type='password'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicRepitPassword'>
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirmar contraseña'
                name='password2'
                value={password2}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Enviar
            </Button>
            <div className='mt-3 d-flex justify-content-center'>
              <span>¿Ya tienes una cuenta? </span>
              <Link className='text-dark' to='/auth/login'>
                Inicia sesión.
              </Link>
            </div>
          </Form>
        </Container>
      </Card>
    </Container>
  );
};

export default Register;
