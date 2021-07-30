import { types } from "../types/types";

export const moviesRegisterReducer = (state = [], action) => {

    switch (action.type) {
      case types.movieRegister:
        return{
         id: action.payload.id,
         title: action.payload.title,
         image: action.payload.image,
         overview: action.payload.overview,
         vote_average: action.payload.vote_average
        }
        case types.Listar:
            return{
                ...state,
                pelicula:[...action.payload]
            }
      default:
        return state;
    }
   
   }