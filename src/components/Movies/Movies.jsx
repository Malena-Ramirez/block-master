import React, { useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MovieDetail from '../movie-detail/MovieDetail';
// import { useDispatch } from 'react-redux';
// import { movieRegister } from '../../action/action';

const Movies = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const movies = useSelector((state) => state.movies);
  const urlImage = 'https://image.tmdb.org/t/p/w500/';

  const handleShow = (movie) => {
    setModalShow(true);
    setSelectedMovie(movie.id);
  };

  return (
    <>
      <h1 className='text-light text-center mb-4'>Todas las películas</h1>
      <Container>
        <Row xs={1} md={5} className='g-4'>
          {movies.map((movie) => (
            <Col key={movie.id}>
              <Card
                className='bg-dark text-white'
                onClick={() => handleShow(movie)}
              >
                <Card.Img
                  src={urlImage + movie.poster_path}
                  alt={movie.original_title}
                />
                <Card.ImgOverlay>
                  <Card.Text>{movie.vote_average}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <MovieDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={selectedMovie}
      />
    </>
  );
};

export default Movies;
