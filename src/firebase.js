import firebase from 'firebase'

/* eslint-disable no-unused-vars */
const firebaseConfig = {
    apiKey: "AIzaSyBVaHe0ro4PtWh5pZAD47Bl-8qwrsIE_ic",
    authDomain: "instagram-clone-9086c.firebaseapp.com",
    databaseURL: "https://instagram-clone-9086c.firebaseio.com",
    projectId: "instagram-clone-9086c",
    storageBucket: "instagram-clone-9086c.appspot.com",
    messagingSenderId: "360779801669",
    appId: "1:360779801669:web:bf462f6a2930b696726f2c",
    measurementId: "G-RT1YLP3GST"
};

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };