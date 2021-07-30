import { types } from '../types/types'
import { firebase, google, db } from "../firebase/firebaseConfig";

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName))
            })
    }
}

export const registroEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                console.log(user);

                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

//primera funcion asincrona
export const loginEmailPassword = (email, password) => {
    //devuelve un callback
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const setMovies = (movies) => {
    return {
        type: types.setMovies,
        payload: movies
    }
}


export const register = (id, title, vote_average, overview, image) => {
    return {
        type: types.register,
        payload: {
            id,
            title,
            vote_average,
            overview,
            image
        }
    }
}

export const movieRegister = (id, title, vote_average, overview, image) => {
    return async (dispatch) => {
        const newMovie = {
            id,
            title,
            vote_average,
            overview,
            image
        }
        await db.collection('/movies').add(newMovie);
        dispatch(register(id, title, vote_average, overview, image))
    }
}

export const listar = (peliculas) =>{
    return{
        type: types.Listar,
        payload: peliculas
    }
}

export const listarPeliculas = ()=>{
    return async(dispatch)=>{
        const data = await db.collection('/movies').get();
        const pelicula = [];

        data.forEach(est=>{
            pelicula.push({
                ...est.data()
            })
        })
        console.log(pelicula);
        dispatch(listar(pelicula));
    }
}