import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { loginReducer } from "../reducers/loginReducer";
import { setMoviesReducer } from "../reducers/setMoviesReducer";
import { moviesRegisterReducer } from "../reducers/registerMovies";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    movies: setMoviesReducer,
    registerMovies: moviesRegisterReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ));