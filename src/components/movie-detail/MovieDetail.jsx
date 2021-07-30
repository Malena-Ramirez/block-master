import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MovieDetail = (props) => {
  const [genres, setGenres] = useState([]);
  const movies = useSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectedGenre, setSelectedGenre] = useState('');
  const urlImage = 'https://image.tmdb.org/t/p/w500/';

  const fetchGenreMovie = async () => {
    const response = await axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=a5b6e4573766eddddb44bea3d3bfa64e&language=es-CO'
      )
      .catch((err) => {
        console.log('Error', err);
      });
    setGenres(response.data.genres);
  };

  useEffect(() => {
    fetchGenreMovie();
  }, []);

  useEffect(() => {
    setSelectedMovie(movies.find((movie) => movie.id === props.id));
  }, [movies, props.id]);

  useEffect(() => {
    if (selectedMovie) {
      setSelectedGenre(
        genres.find((gen) => gen.id === selectedMovie.genre_ids[0])
      );
    }
  }, [selectedMovie, genres]);

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {selectedMovie && (
        <Modal.Body>
          <h4>{selectedMovie.title}</h4>
          <img src={urlImage + selectedMovie.poster_path} alt='' />
          <p>{selectedMovie.overview}</p>
          <div>
            <span>
              {selectedMovie.release_date
                ? selectedMovie.release_date.split('-')[0]
                : ''}
            </span>
            <span className='ms-3'>{selectedGenre && selectedGenre.name}</span>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetail;
