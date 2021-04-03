// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCL3EZfZiDUam-lI5208XXlwEONEKKI89E",
  authDomain: "todo-app-cwg.firebaseapp.com",
  projectId: "todo-app-cwg",
  storageBucket: "todo-app-cwg.appspot.com",
  messagingSenderId: "396053265979",
  appId: "1:396053265979:web:a3b996914bddbbbc85661e",
  measurementId: "G-BBBN2MSPG1",
});

const db = firebaseApp.firestore();

export default db;
