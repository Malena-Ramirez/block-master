import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDPidtTS8Z_OQpMa93168EflqcF7u3HNM0",
    authDomain: "block-master-grl.firebaseapp.com",
    projectId: "block-master-grl",
    storageBucket: "block-master-grl.appspot.com",
    messagingSenderId: "562306155793",
    appId: "1:562306155793:web:bccd96cd0352dbe0a2f8b0",
    measurementId: "G-ZD1NZRQ583"
  };

//inicializando firebase
firebase.initializeApp(firebaseConfig);

//Referencia a la base de Datos
const db = firebase.firestore();
//para permitir  autenticacion con google
const google = new firebase.auth.GoogleAuthProvider();

export{
    db,
    google,
    firebase
}