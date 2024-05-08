import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC-j85riRw8Tf_09eUL4zrP59VtTMYk3Bk",
    authDomain: "aprendendo-firebase-e1c61.firebaseapp.com",
    databaseURL: "https://aprendendo-firebase-e1c61-default-rtdb.firebaseio.com",
    projectId: "aprendendo-firebase-e1c61",
    storageBucket: "aprendendo-firebase-e1c61.appspot.com",
    messagingSenderId: "449488553946",
    appId: "1:449488553946:web:e437aecb7a6a8eacf462e3",
    measurementId: "G-JXE07JZ5CW"
  };

  if(!firebase.apps.lenght){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase;