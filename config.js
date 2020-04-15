import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBECQyuQBOxdod0BHifpgNgkCokqbg8a9I",
    authDomain: "bartersystem-ebcd1.firebaseapp.com",
    databaseURL: "https://bartersystem-ebcd1.firebaseio.com",
    projectId: "bartersystem-ebcd1",
    storageBucket: "bartersystem-ebcd1.appspot.com",
    messagingSenderId: "300793884121",
    appId: "1:300793884121:web:f658700ef6885462057dc8"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();