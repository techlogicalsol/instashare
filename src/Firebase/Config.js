import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBfe51ViCGQnGNusX10YNohNfCupXMU0U",
  authDomain: "fire-instashare.firebaseapp.com",
  projectId: "fire-instashare",
  storageBucket: "fire-instashare.appspot.com",
  messagingSenderId: "997706050034",
  appId: "1:997706050034:web:b16ea632917b16962aa36b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };