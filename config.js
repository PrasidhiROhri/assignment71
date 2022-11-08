import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDVlrv8R9WQ2dzgwxnqKbhuBsJtqylrvrM",
    authDomain: "e-ride-98ef2.firebaseapp.com",
    projectId: "e-ride-98ef2",
    storageBucket: "e-ride-98ef2.appspot.com",
    messagingSenderId: "154786736526",
    appId: "1:154786736526:web:848805de50db641b015cdf"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
