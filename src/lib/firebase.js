import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsImGL6fuQb715w69ZlSVEkZag07sLu8Y",
  authDomain: "quiz-20730.firebaseapp.com",
  projectId: "quiz-20730",
  storageBucket: "quiz-20730.appspot.com",
  messagingSenderId: "402820908137",
  appId: "1:402820908137:web:890833413103e61f6c0ef8",
  measurementId: "G-D4K2ZRYZ0K"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
