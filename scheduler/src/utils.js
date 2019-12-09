import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBT9O9W8iAl-MV0EVdAiiQ_BtaKuu5Y7qo",
  authDomain: "quick-react-tutorial.firebaseapp.com",
  databaseURL: "https://quick-react-tutorial.firebaseio.com",
  projectId: "quick-react-tutorial",
  storageBucket: "quick-react-tutorial.appspot.com",
  messagingSenderId: "493033608347",
  appId: "1:493033608347:web:deaa8c6270b4d2968be23e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export {db};
