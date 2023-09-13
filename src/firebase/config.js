import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzoA5vqHv-GzJK7FZHY51bGYGW6w8800E",
    authDomain: "olx-clone-ad286.firebaseapp.com",
    projectId: "olx-clone-ad286",
    storageBucket: "olx-clone-ad286.appspot.com",
    messagingSenderId: "587540581719",
    appId: "1:587540581719:web:a7a2e8bb3c207a91d7c212",
    measurementId: "G-QN4309DWQW"
  };
  export default firebase.initializeApp(firebaseConfig)