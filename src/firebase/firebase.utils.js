import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKUeMGFcuXwztxpfMfDFhjgEOSHV72vSI",
    authDomain: "leadpreneuer.firebaseapp.com",
    databaseURL: "https://leadpreneuer.firebaseio.com",
    projectId: "leadpreneuer",
    storageBucket: "leadpreneuer.appspot.com",
    messagingSenderId: "629978663890",
    appId: "1:629978663890:web:124b3002e78539b67d160b",
    measurementId: "G-JLYLHV6HMD"
};

//initialize app
firebase.initializeApp(firebaseConfig);

//enable offline support
firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;