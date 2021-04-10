import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4qLWb2WlP8zIO7UP5kqC_0cV9_RVkHGA",
  authDomain: "zillow-scraper-3a273.firebaseapp.com",
  databaseURL: "https://zillow-scraper-3a273-default-rtdb.firebaseio.com",
  projectId: "zillow-scraper-3a273",
  storageBucket: "zillow-scraper-3a273.appspot.com",
  messagingSenderId: "507814484936",
  appId: "1:507814484936:web:6483caff3c66ea8963befd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
var db = firebase.database();

export { firebase, db };
