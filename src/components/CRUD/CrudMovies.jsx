import React, { useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CrudMovies = () => {
  const [movies, setMovies] = useState([]);
  const pelicula = useSelector((store) => store.registerMovies.pelicula);
  console.log('pelicula', pelicula);
  useEffect(() => {
    setMovies(pelicula);
  }, [pelicula]);

  return (
    <>
      <h2 className='text-center text-white mb-4 h1'>Películas guardadas</h2>

      {movies ? (
        <Row xs={1} md={3} className='g-4'>
          {movies.map((element) => (
            <Col key={element.id}>
              <Card className='h-100'>
                <Card.Img variant='top' src={element.image} />
                <Card.Body>
                  <Card.Title className='text-center'>
                    {element.title}
                  </Card.Title>
                  <Card.Text>{element.overview}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroupItem>
                    <span class='fw-bold'>Calificación:</span>{' '}
                    {element.vote_average}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href='#'>Editar</Card.Link>
                  <Card.Link href='#'>Eliminar</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className='text-light h3'>No hay datos de películas guardadas</p>
      )}
    </>

    //     <Table className="mt-3 bg-light rounded" striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Título</th>
    //         <th>Descripción</th>
    //         <th>Puntuación</th>
    //         <th>Imagen</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             (pelicula) ?
    //             (
    //                 pelicula.map(element => (

    //                     <tr key={element.id}>
    //                         <td>{element.id}</td>
    //                         <td>{element.title}</td>
    //                         <td>{element.overview}</td>
    //                         <td>{element.vote_average}</td>
    //                         <td>{element.image}</td>
    //                     </tr>

    //                 ))
    //             ):
    //             <p>Datos no disponibles</p>
    //         }

    //     </tbody>
    //   </Table>
  );
};

export default CrudMovies;
