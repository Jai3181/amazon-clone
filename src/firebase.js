import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyUBToYWUlbpcTBw2aqvPGp3njBnBElsg",
    authDomain: "clone-538a8.firebaseapp.com",
    projectId: "clone-538a8",
    storageBucket: "clone-538a8.appspot.com",
    messagingSenderId: "320981077453",
    appId: "1:320981077453:web:26b8fdbb68d23f94510884",
    measurementId: "G-GFCZ4RMC8J"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};