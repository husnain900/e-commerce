import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD3lKN_2xhEwxUpqxUiWH1R1_KUO0cJ30U",
  authDomain: "e-commerce-husnain.firebaseapp.com",
  projectId: "e-commerce-husnain",
  storageBucket: "e-commerce-husnain.appspot.com",
  messagingSenderId: "89320810491",
  appId: "1:89320810491:web:19bf8db6b9671fe06c0d5e",
  measurementId: "G-W2C0MC8FXX"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}