import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCY-gVyIipjrR8y1SCN9QYmY0Z4liAeHjE",
  authDomain: "dreamplay-ad35e.firebaseapp.com",
  databaseURL: "https://dreamplay-ad35e.firebaseio.com",
  projectId: "dreamplay-ad35e",
  storageBucket: "dreamplay-ad35e.appspot.com",
  messagingSenderId: "294272067285",
  appId: "1:294272067285:web:1c3b7ce27359d863"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;