import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //add your api keys here and rename the file name to firebase.js
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
