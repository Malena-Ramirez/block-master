import React, { useEffect } from 'react';
import axios from 'axios';
import Movies from '../components/Movies/Movies';
import BannerMovies from '../components/Banner/BannerMovies';
import Navbar from '../components/Navbar/Navbar';
import { createGlobalStyle } from 'styled-components';
import { setMovies } from '../action/action';
import { useDispatch } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  body {
    background: #352E6C;
    margin: 0 auto;
    padding: 0;
  }
`;

const Home = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios
        .get(
          'https://api.themoviedb.org/3/movie/popular?api_key=a5b6e4573766eddddb44bea3d3bfa64e&language=es-Co&page=1'
        )
        .catch((err) => {
          console.log('Error', err);
        });
      dispatch(setMovies(response.data.results));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BannerMovies />
      <Movies />
    </>
  );
};

export default Home;
