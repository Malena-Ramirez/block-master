import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from '../../hook/useForm';
import { useDispatch } from 'react-redux';
import { movieRegister, listarPeliculas } from '../../action/action';
import { useEffect } from 'react';
import CrudMovies from '../CRUD/CrudMovies';
import { useSelector } from 'react-redux';

const FormCrud = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculas());
  }, [dispatch]);

  const registerMovies = useSelector((state) => state.registerMovies);
  console.log(registerMovies);

  const [formValues, handleInputChange, reset] = useForm({
    id: '',
    title: '',
    vote_average: '',
    overview: '',
    image: '',
  });

  const { id, title, vote_average, overview, image } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(movieRegister(id, title, vote_average, overview, image));
    console.log(id, title, vote_average, overview, image);
    reset();
  };

  return (
    <Container className='my-4' fluid>
      <Container fluid>
        <Row>
          <Col
            xs={12}
            md={3}
            className='mx-auto p-4 bg-light border border-warning border-5 rounded'
            style={{ height: 'min-content' }}
          >
            <h1 className='text-center h2 mb-4'>Registrar películas</h1>
            <Form onSubmit={handleRegister}>
              <Form.Group className='mb-3' controlId='formBasicId'>
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type='text'
                  name='id'
                  value={id}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Título de la película</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  value={title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicVote_average'>
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type='number'
                  step='0.1'
                  name='vote_average'
                  value={vote_average}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicOverview'>
                <Form.Label>Resumen</Form.Label>
                <Form.Control
                  type='text'
                  name='overview'
                  value={overview}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicImage'>
                <Form.Label>URL de la imagen</Form.Label>
                <Form.Control
                  type='text'
                  name='image'
                  value={image}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <div className='d-flex justify-content-center'>
                <Button size='lg' variant='warning' type='submit'>
                  Guardar
                </Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={8}>
            <CrudMovies />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FormCrud;
