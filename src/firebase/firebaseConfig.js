import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDrpQjcPodV68klSBoG4JmMSJn80HTwLcQ",
  authDomain: "app-fb-crud-2c1a6.firebaseapp.com",
  projectId: "app-fb-crud-2c1a6",
  storageBucket: "app-fb-crud-2c1a6.appspot.com",
  messagingSenderId: "721519056345",
  appId: "1:721519056345:web:90675e2959b69c9c5335c8"
};

//inicializando firebase
firebase.initializeApp(firebaseConfig);

//Referencia a la base de Datos
const db = firebase.firestore();
//para permitir  autenticacion con google
const google = new firebase.auth.GoogleAuthProvider();

export {
  db,
  google,
  firebase
}