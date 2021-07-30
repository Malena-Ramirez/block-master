import { types } from "../types/types";


export const setMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.setMovies:
      
      return action.payload;

    default:
      return state;
  }
}

