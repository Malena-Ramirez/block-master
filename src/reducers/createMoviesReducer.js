import { types } from '../types/types';

const createMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.register:
      return {
        id: action.payload.id,
        title: action.payload.title,
        vote_average: action.payload.vote_average,
        overview: action.payload.overview,
        image: action.payloadimage
      };

    default:
      return state;
  }

}

export default createMoviesReducer;