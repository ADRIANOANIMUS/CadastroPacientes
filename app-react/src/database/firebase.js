import firebase from 'firebase'
const  firebaseConfig = {
    apiKey: "AIzaSyBE1Gn_swqvxUlyGzaek929eDRS2HXl0C8",
    authDomain: "cadastropacientes-c2387.firebaseapp.com",
    projectId: "cadastropacientes-c2387",
    storageBucket: "cadastropacientes-c2387.appspot.com",
    messagingSenderId: "893035366822",
    appId: "1:893035366822:web:6ad302bd38e118d9d86767"
  };

  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()